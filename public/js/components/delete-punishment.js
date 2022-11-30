export function DeletePunishment(paramInfo, number){
    let list = document.getElementById("punishment-list");
    let elementList = document.getElementById(`punish-${number}`);
    list.removeChild(elementList)
    paramInfo.deleteList(number-1);
    console.log(paramInfo.getPunishments);
}