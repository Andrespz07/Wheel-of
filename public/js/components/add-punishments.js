import { ActionPunishments } from "./action-punishment.js";
import { isEmpty, isRepeat } from "./AuxiliarFunctions.js";
import List from "./list.js";

export function CreateList(){
    let PunishmentList = new List();
    AddPunishments(PunishmentList);
    ActionPunishments(PunishmentList);
}
export function AddPunishments(paramInfo){
    let ButtonAdd = document.getElementById("btn-add");
    ButtonAdd.addEventListener("click", ()=>{
        let InfoPunishments = document.getElementById ("punishment").value;
        if(!isEmpty(InfoPunishments) && isRepeat(paramInfo.getPunishments, InfoPunishments)==-1){
        paramInfo.set(InfoPunishments);
        RenderPunishments(InfoPunishments);
        renderDib(InfoPunishments);
        } else{
            alert("Is duplicate or is empty")
        }
    })
}
export function RenderPunishments(paramInfo){
    let Render = document.getElementById
    ("punishment-list");
    Render.innerHTML  += /* html */ `
        <li id="${paramInfo}"class="punish">${paramInfo}
            <button id="edit-btn-${paramInfo}" class="edit-btn">edit</button>
            <button id="delete-btn-${paramInfo}" class="delete-btn">delete</button>
        </li>
    `
}

export function renderDib(paramInfo){
    let Render = document.getElementById
    ("test");
    Render.innerHTML  += /* html */ `
    <div id="div-${paramInfo}" class="target">${paramInfo}
    
    </div>
    `
}