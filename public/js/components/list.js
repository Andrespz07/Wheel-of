export default class List{
    #Punishments;
    constructor(){
        this.#Punishments = new Array();
    }
    set(paramInfo){
        this.#Punishments.push(paramInfo);
    }
    get getPunishments(){
        return this.#Punishments;
    }
    editList(paramInfo, index){
        this.#Punishments[index]=paramInfo;
    }
    deleteList(index){
        this.#Punishments.splice(index, 1);
    }
}