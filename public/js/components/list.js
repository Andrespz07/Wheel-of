export default class List{
    #Punishments;
    constructor(){
        this.#Punishments = new Array();
    }
    set(param){
        this.#Punishments.push(param);
    }
    get getPunishments(){
        return this.#Punishments;
    }
    optainLength(){
        return this.#Punishments.length;
    }
    editList(param, index){
        console.log(param);
        console.log(index);
        this.#Punishments.splice(index,1,param);
    }
}