let input=document.getElementById("input")

function display(data){
    let symbols=["+","-","*","/","%","."]
    for(i=0;i<10;i++){
        if(data == i){
            input.value+=i
        }
    }
    for(j of symbols){
        if(data == j){
            input.value+=j
        }
    }
    if(data === "clear"){
        input.value=""
    }
    if(input.value.length>12){
        input.style="font-size:23px;"
    }

    input.scrollLeft= input.scrollWidth;
}

calculate = () =>{
    try {
        let result = new Function('return ' + input.value)();
        input.value = result;
    } 
    catch (error) {
        input.value = "Error";
    }
}

//let result = new Function("return 2615+256-876*2")();
// This creates a new function like this:
// function anonymous() {
//     return 2615+256-876*2;
// }