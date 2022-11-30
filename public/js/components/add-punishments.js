import { ActionPunishments } from "./action-punishment.js";
import List from "./list.js";

export function CreateList(){
    let PunishmentList = new List();
    AddPunishments(PunishmentList);
    ActionPunishments(PunishmentList);
}
export function AddPunishments(param){
    let ButtonAdd = document.getElementById("btn-add");
    ButtonAdd.addEventListener("click", ()=>{
        let InfoPunishments = document.getElementById ("punishment").value; 
        param.set(InfoPunishments);
        console.log(param.getPunishments);
        let lengthArray = param.optainLength();
        RenderPunishments(InfoPunishments, lengthArray);
        renderDib(InfoPunishments, lengthArray);
        
    })
}
export function RenderPunishments(paramInfo, number){
    let Render = document.getElementById
    ("punishment-list");
    Render.innerHTML  += /* html */ `
        <li id="punish-${paramInfo.lengthArray}" class="punish">${paramInfo}
            <button id="edit-btn-${number}" class="edit-btn">edit</button>
            <button id="delete-btn-${number}" class="delete-btn">delete</button>
        </li>
    `
}

export function renderDib(paramInfo, number){
    let Render = document.getElementById
    ("test");
    Render.innerHTML  += /* html */ `
    <div id="div-${number}" class="div">${paramInfo}
    
    </div>
    `
}