import { extractPositionTask } from "./AuxiliarFunctions.js";
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
    })
}