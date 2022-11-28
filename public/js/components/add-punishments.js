import List from "./list.js";

export function CreateList(){
    let PunishmentList = new List();
    AddPunishments(PunishmentList);
}
export function AddPunishments(param){
    let ButtonAdd = document.getElementById("btn-add");
    ButtonAdd.addEventListener("click", ()=>{
        let InfoPunishments = document.getElementById ("punishment").value; 
        param.set(InfoPunishments);
        console.log(param.getPunishments);
        let lengthArray = param.optainLength();
        RenderPunishments(InfoPunishments, lengthArray);
        
    })
}

export function RenderPunishments(paramInfo, number){
    let Render = document.getElementById
    ("punishment-list");
    Render.innerHTML  += `
        <li id="punish-${number}" class="punish">${paramInfo}</li>
    `
}
