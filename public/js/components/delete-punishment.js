export function DeletePunishment(paramInfo, number, id){
    let elementDelete = document.getElementById(`${id}`);
    let list = document.getElementById("punishment-list");
    paramInfo.deleteList(number);
    list.removeChild(elementDelete);
}
export function DeletePunishmentRender(paramInfo, number, id){
    let elementDelete = document.getElementById(`${id}`);
    let list = document.getElementById("section-target");
    paramInfo.deleteList(number);
    list.removeChild(elementDelete);
}