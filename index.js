import inquirer from "inquirer";
import { getDataFromFile, promptNewSpent, saveDataToFile } from "./helpers/FileSystemMethods.js";

const main = async () => {
    let appRun = true;
    const fileSource = "data/gastos.json";
    while (appRun) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "selectedAction",
                message: "Que deseas hacer?",
                choices: [
                    {
                        value: "create",
                        name: "Crear Nuevo Gasto",
                    },
                    {
                        value: "list",
                        name: "Ver Todos los Gastos",
                    },
                    {
                        value: "exit",
                        name: "Salir",
                    },
                ],
            },
        ]);
        switch (action.selectedAction) {
            case "create":
                await createNewSpent(fileSource);
                break;
            case "list":
                await listAllSpents(fileSource);
                break;
            case "exit":
                appRun = false;
                break;
        }
    }
}

main();

async function createNewSpent (file) {
    console.log("Crear nuevo gasto");
    const newSpent = await promptNewSpent();
    console.log("datos del Gasto ", newSpent);
    const data = await getDataFromFile(file);
    console.log("data leida", data);
    data.push(newSpent);
    console.log("data modificada", data);
    await saveDataToFile(file, data);
}

async function listAllSpents (file) {
    console.log("Listado de todos los gastos");
    const data = await getDataFromFile(file);
    console.log(data);
}