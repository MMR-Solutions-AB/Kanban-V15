import React from "react";
import { useState } from "react";
import { useProject } from "../../context/ProjectContext";
import "./CreateProject.scss";
const CreateProject = ({ setIsOpen }) => {
  const { addNewProject } = useProject();
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    addNewProject(value);
  };

  return (
    <div className="create-project-modal">
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default CreateProject;
