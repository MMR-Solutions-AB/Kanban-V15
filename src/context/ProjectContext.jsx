import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectContext = createContext({});

export function useProject() {
  return useContext(ProjectContext);
}
const ProjectContextProvider = ({ children }) => {
  const [projects, setprojects] = useState(projectsData);
  const [current, setCurrent] = useState(projectsData[0]);

  const addTicket = (ticket) => {
    setCurrent((prev) => ({
      ...prev,
      board: {
        ...prev.board,
        stage1: {
          ...prev.board.stage1,
          items: [...prev.board.stage1.items, ticket],
        },
      },
    }));
  };

  const getCurrent = (id) => {
    const newCurrent = projects.find((item) => {
      return item.id == id;
    });
    setCurrent(newCurrent);
  };

  const addNewProject = (title) => {
    const data = {
      title: title,
      id: projects.length + 1,
      board: {
        stage1: {
          name: "Todo",
          items: [],
        },
        stage2: {
          name: "Doing",
          items: [],
        },
        stage3: {
          name: "Done",
          items: [],
        },
      },
    };
    setprojects((prev) => [...prev, data]);
  };

  const value = {
    current,
    setCurrent,
    projects,
    getCurrent,
    addTicket,
    addNewProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectContextProvider;

const projectsData = [
  {
    title: "Placa Board",
    id: 1,
    board: {
      stage1: {
        name: "Todo",
        items: [
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Context Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "Datalake team need config",
            description: "",
            tasks: ["Fix types at the same time"],
          },
          {
            id: uuidv4(),
            title: "i18n english",
            description: "Setup json and NPM",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      stage2: {
        name: "Doing",
        items: [
          {
            id: uuidv4(),
            title: "Portal for modals",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      stage3: {
        name: "Done",
        items: [],
      },
    },
  },
  {
    title: "Jira Board",
    id: 2,
    board: {
      stage1: {
        name: "Todo",
        items: [
          {
            id: uuidv4(),
            title: "Test Bug",
            description: "This is one of the longest descriptions ever",
            tasks: ["Fix types at the same time"],
          },
        ],
      },
      stage2: {
        name: "Doing",
        items: [
          {
            id: uuidv4(),
            title: "Portal for modals",
            description: "This is one of the longest descriptions ever",
            tasks: ["Types and modal refs, get cookies to work with auth"],
          },
        ],
      },
      stage3: {
        name: "Done",
        items: [],
      },
    },
  },
];
