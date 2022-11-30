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
        this.#Punishments[index]=param;
    }
    deleteList(param){
        this.#Punishments.splice(param, 1);
    }
}