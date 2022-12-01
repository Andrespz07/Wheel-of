import { isEmpty } from "./AuxiliarFunctions.js";
import { DeletePunishment } from "./delete-punishment.js";
export function RandomFunction(paramInfo){
    console.log(paramInfo.getPunishments);
    let buttonInit = document.getElementById("button-sufre");
    

    buttonInit.addEventListener("click", ()=>{
        let nameUser = document.getElementById("input-name").value;
        if(!isEmpty(nameUser)){
        const randomNum=Math.floor(Math.random() * paramInfo.getPunishments.length);
        let activate = document.getElementById(`div-${paramInfo.getPunishments[randomNum]}`);
        activate.classList.add("card-actived");
        if(activate.classList.value== "card card-actived"){
        alert(`${nameUser} your punish is: ${paramInfo.getPunishments[randomNum]}`)
         DeletePunishment(paramInfo, randomNum,`${paramInfo.getPunishments[randomNum]}`) }
    }
    else{
        alert("the username is empty")
    }
})
    
} 