import { isEmpty, isRepeat } from "./AuxiliarFunctions.js";
export function EditPunishment (paramInfo, number, id){
    let modify = document.getElementById(`${id}`)
    let word = prompt("Insert the change");
    if(!isEmpty(word) && isRepeat(paramInfo.getPunishments, word)==-1){
    paramInfo.editList(word, number);
    modify.id= `${word}`;
    modify.innerHTML=  `
    ${word}
    <button id="edit-btn-${word}" class="edit-btn">edit</button>
    <button id="delete-btn-${word}" class="delete-btn">delete</button>
    ` 
    EditPunishmentRender(word,id);

} else{
    alert("Is duplicate or is empty")
}
}
export function EditPunishmentRender (word,id){
    let modify = document.getElementById(`div-${id}`);   
    modify.id= `div-${word}`;
    modify.innerHTML=  `
    ${word}
   
` 
}