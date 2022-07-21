let a='';
let b='';
let numbers=[];
let res;

function numOperations(num){
    numbers.push(num);
    if(numbers.length !=1){
        a = '';
document.getElementById('display').innerHTML= a
    }
    for(let i=0; i<numbers.length; i++) 
    {
        a=a+numbers[i]
    }
    document.getElementById('display').innerHTML=a

}

function result(){
    document.getElementById('display').innerHTML='';
    for (i=0; i<numbers.length; i++){
        b+=numbers[i]
    }
    res=eval(b);
    document.getElementById('display').innerHTML=res;
    while(numbers.length>0){
        numbers.pop();
    }
    numbers.push(res.toString());
}
function clr(){
    document.getElementById('display').innerHTML = "0";
    while(numbers.length>0){
        numbers.pop();
    }
    a="";
    b="";
}