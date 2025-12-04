console.log("Hello world")

function myfunc(){
    let s=document.getElementById('s').value;
    if(s==0){
        console.log("S is zero");
    }
    else{
        console.log("S is not zero");
    }
    let Name=document.getElementById('name').value;
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let z=Number(x)+Number(y);
    console.log(Name);
    console.log("Adding x and y we get " + z);
    console.log("Button clicked...!!!")
    
    document.getElementById('name').value="";
    document.getElementById('x').value="";
    document.getElementById('y').value="";
    
}

