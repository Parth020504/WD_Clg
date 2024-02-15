const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");

const next1 = document.getElementById("next1");
const back1 = document.getElementById("back1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

const step1=document.getElementById("step1");
const step2=document.getElementById("step2");
const step3=document.getElementById("step3");

step1.style.backgroundColor="#4caf50";
step1.style.padding="10px";
step1.style.borderRadius="20px";


form2.style.display="none";
form3.style.display="none";


next1.addEventListener("click",()=>{
    form1.style.display="none";
    form2.style.display="block";
    step1.style="none";
    step2.style.backgroundColor="#4caf50";
    step2.style.padding="10px";
    step2.style.borderRadius="20px";
})


back1.addEventListener("click",()=>{
    form1.style.display="block";
    form2.style.display="none";
    step2.style="none";
    step1.style.backgroundColor="#4caf50";
    step1.style.padding="10px";
    step1.style.borderRadius="20px";
})

next2.addEventListener("click",()=>{
    form2.style.display="none";
    form3.style.display="block";
    step2.style="none";
    step3.style.backgroundColor="#4caf50";
    step3.style.padding="10px";
    step3.style.borderRadius="20px";
})

back2.addEventListener("click",()=>{
    form2.style.display="block";
    form3.style.display="none";
    step3.style="none";
    step2.style.backgroundColor="#4caf50";
    step2.style.padding="10px";
    step2.style.borderRadius="20px";
})

// setting the sap id field according to  the radio button selected

const sapid=document.querySelector(".sap-id");
const yes=document.querySelector("#yes");

sapid.style.display="none";
function display(){
    if(yes.checked){
        sapid.style.display="block";
    }
    else{
        sapid.style.display="none";
    }
}



