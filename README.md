# Local storage uppgift

Denna uppgift kommer fokusera på att bygga vår allra första egna hook för att spara alla våra project och tickets permanent

## Din uppgift

Denna uppgift ska du göra när du är klar med [F6](https://github.com/MMR-Solutions-AB/Kanban-V15/tree/F6) branchen. Uppgiften går ut på att skapa en egen hook som ska heta **useLocalStorage** som du ska använda istället för **useState**

### Steg att ta

-   Skapa en **hooks** mapp i **src** mappen och i den ny skapade mappen kan du skapa en ny fil som heter **useLocalStorage.jsx**
-   **useLocalStorage** hooken går ut på kommunicera med local storage (vilket är som en super simpel liten databas i vår browser) och läsa samt skriva till den, så att kolla in på vad local storage är och hur man använder det i Javascript är ett bra steg att ta!
-   I din **context/ProjectContext.jsx** ska du ändra raden som skapar state med hjälp av **useState** hooken till att använda din ny skapade hook. Alltså

```jsx
const [projects, setProjects] = useState(projectsData)
// ska bli till
const [projects, setProjects] = useLocalStorage(/* Vad ska stå här 🤔 */)
```

### Tips

-   Du ska enbart röra **hooks/useLocalStorage.jsx** och **context/ProjectContext.jsx** filerna, inga andra filer ska skapas eller ändras för denna uppgift
