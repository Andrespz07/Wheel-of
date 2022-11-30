import { extractPositionTask } from "./AuxiliarFunctions.js";
import { DeletePunishment } from "./delete-punishment.js";
import List from "./list.js";

export function ActionPunishments(paramInfo){
    let modify = document.getElementById("punishment-list");
    modify.addEventListener("click", (e) =>{
        console.log(e.target.id);
        if(e.target.classList=="edit-btn"){
            let palabra = prompt();
            let number = extractPositionTask(e.target.id);
            paramInfo.editList(palabra, number-1);
            console.log(paramInfo.getPunishments);
            let newRender = document.getElementById(`punish-${number}`);
            newRender.innerHTML = `
            <li id="punish-${number}" class="punish">${palabra}
            <button id="edit-btn-${number}" class="edit-btn">edit</button>
            <button id="delete-btn-${number}" class="delete-btn">delete</button>
        </li>`
        }
        if(e.target.classList=="delete-btn"){
            let number = extractPositionTask(e.target.id);
            let number2 = paramInfo.getPunishments.indexOf("rojo");
            console.log(number2);
           DeletePunishment(paramInfo, number);
        }
    })
}