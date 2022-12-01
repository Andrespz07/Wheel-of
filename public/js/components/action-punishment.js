
import { DeletePunishment } from "./delete-punishment.js";
import { EditPunishment } from "./edit-punishment.js"
import List from "./list.js";

export function ActionPunishments(paramInfo){
    let modify = document.getElementById("punishment-list");
    modify.addEventListener("click", (e) =>{
        if(e.target.classList=="edit-btn"){
            let modifyId = e.target.parentNode.id
            let number = paramInfo.getPunishments.indexOf(modifyId);
            EditPunishment(paramInfo, number, modifyId);
        }
        if(e.target.classList=="delete-btn"){
            let modifyId = e.target.parentNode.id
            let number = paramInfo.getPunishments.indexOf(modifyId);
           DeletePunishment(paramInfo, number, modifyId);
        }
    })
}