export function extractPositionTask(param){
    param = param.split("-");
    param = param[2];
    return parseInt(param);

}