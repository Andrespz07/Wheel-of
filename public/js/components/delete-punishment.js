export function DeletePunishment(paramInfo, number, id){
    let elementDelete = document.getElementById(`${id}`);
    let list = document.getElementById("punishment-list");
    paramInfo.deleteList(number);
    list.removeChild(elementDelete);
    DeletePunishmentRender(id);
}
export function DeletePunishmentRender(id){
    let elementDelete = document.getElementById(`div-${id}`);
    let list = document.getElementById("section-target"); 
    list.removeChild(elementDelete);
}