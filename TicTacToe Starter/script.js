let counter = 0
function addXO(){
    counter++
    if(counter % 2 !== 0){
        console.log("X")
    }
    else{
        console.log("O")
    }    
}