import { DeletePunishment } from "./delete-punishment.js";
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