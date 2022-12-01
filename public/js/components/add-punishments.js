import { ActionPunishments } from "./action-punishment.js";
import { isEmpty, isRepeat } from "./AuxiliarFunctions.js";
import { DeletePunishment } from "./delete-punishment.js";
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
        
    });
    RandomFunction(paramInfo);
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
    ("section-target");
    Render.innerHTML  += /* html */ `
    <div id="div-${paramInfo}" class="card">${paramInfo}
    
    </div>
    `
}
export function RandomFunction(paramInfo){
    console.log(paramInfo.getPunishments);
    let buttonInit = document.getElementById("button-sufre");
    

    buttonInit.addEventListener("click", ()=>{
        const randomNum=Math.floor(Math.random() * paramInfo.getPunishments.length);
        let activate = document.getElementById(`div-${paramInfo.getPunishments[randomNum]}`);
        activate.classList.add("card-actived");
        if(activate.classList.value== "card card-actived"){
        alert(`the punish is: ${paramInfo.getPunishments[randomNum]}`)
         DeletePunishment(paramInfo, randomNum,`${paramInfo.getPunishments[randomNum]}`) }
    })
    
} 
