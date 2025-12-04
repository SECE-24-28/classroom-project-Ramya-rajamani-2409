function myfunc(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let c=document.getElementById('c').value;
    let x=(Number(a)+Number(b)+Number(c))/3
    ;
    if(a<40 || b<40 || c<40){
        console.log("You are fail");
    }else if(x>90){ 
        console.log("O grade");
    }else if(x>80){
        console.log("A+ grade");
    }else if(x>70){
        console.log("A grade");
    }else if(x>60){
        console.log("B+ grade");
    }else if(x>50){
        console.log("B grade");
    }else if(x>40){
        console.log("C grade");
    }
    document.getElementById('a').value="";
    document.getElementById('b').value="";
    document.getElementById('c').value="";
}
function count(){
    console.log("Counting using for loop:")
    for(i=1; i<11; i++){
        console.log(i);
    }
    console.log("Counting using while loop:")
    let j=11;
    while(j<21){
        console.log(j);
        j++;
    }
}

function evennum(){
    console.log("Even number upto 100");
    for(i=2;i<101;i=i+2){
        console.log(i);
    }
}
function execute(){
    let d=new Date();
    console.log(d);
    let r=12.6;
    console.log(Math.round(r));
    console.log(Math.ceil(r));
    console.log(Math.floor(r));
    console.log(Math.sign(r));
    
}

