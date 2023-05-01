function receivesAFunction(callbackf){
    return callbackf()
}
function returnsANamedFunction(){
    return function named(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}