import fs from 'fs';
import inquirer from "inquirer";

export async function promptNewSpent(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "spentID",
            message: "ID del Gasto"
        },
        {
            type: "input",
            name: "spentName",
            message: "Nombre del Gasto"
        },
        {
            type: "input",
            name: "spentAmount",
            message: "Importe del Gasto"
        }
    ])
}

export const saveDataToFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(data), (error) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

export const getDataFromFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(JSON.parse(data));
        });
    });
}

