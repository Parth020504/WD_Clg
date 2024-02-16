// FORM VALIDATION STARTS 


const yes=document.querySelector("#yes");
const sapid=document.querySelector(".sap-id");
sapid.style.display="none";
function display(){
    if(yes.checked){
        sapid.style.display="block";
    }
    else{
        sapid.style.display="none";
    }
}

const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");

const next1 = document.getElementById("next1");
const back1 = document.getElementById("back1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

step1.style.backgroundColor="#4caf50";
step1.style.padding="10px";
step1.style.borderRadius="20px";

// Regex for validating Form 1 (Username and Password)
const usernameRegex = /^[a-zA-Z0-9_-]+$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

next1.addEventListener("click", () => {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("pass").value;

    if (usernameInput.trim() === '' || passwordInput.trim() === '') {
        alert("Please fill in all required fields.");
    } else if (usernameRegex.test(usernameInput) && passwordRegex.test(passwordInput)) {
        form1.style.display = "none";
        form2.style.display = "block";
        step2.style.backgroundColor = "#4caf50";
        step2.style.padding = "10px";
        step2.style.borderRadius = "20px";
    } else {
        alert("Invalid username or password format. Please try again.");
    }
});

back1.addEventListener("click",()=>{
    form1.style.display="block";
    form2.style.display="none";
    step2.style="none";
    step1.style.backgroundColor="#4caf50";
    step1.style.padding="10px";
    step1.style.borderRadius="20px";
    form1.reset();
})

// Regex for validating Form 2 (Full Name, Email, Contact)
const fullNameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactRegex = /^\d{10}$/;

next2.addEventListener("click", () => {
    const fullNameInput = document.getElementById("fullName").value;
    const emailInput = document.getElementById("email").value;
    const contactInput = document.getElementById("contact").value;

    if (
        fullNameInput.trim() === '' || emailInput.trim() === '' || contactInput.trim() === ''
    ) {
        alert("Please fill in all required fields.");
    } else if (
        fullNameRegex.test(fullNameInput) &&
        emailRegex.test(emailInput) &&
        contactRegex.test(contactInput)
    ) {
        form2.style.display = "none";
        form3.style.display = "block";
        step3.style.backgroundColor = "#4caf50";
        step3.style.padding = "10px";
        step3.style.borderRadius = "20px";
    } else {
        alert("Invalid input format. Please check your details and try again.");
    }
});

back2.addEventListener("click",()=>{
    form2.style.display="block";
    form3.style.display="none";
    step3.style="none";
    step2.style.backgroundColor="#4caf50";
    step2.style.padding="10px";
    step2.style.borderRadius="20px";
    form2.reset();
})

// Regex for validating Form 3 (SAP ID if student is selected)
const sapIdRegex = /^[0-9]{11}$/;

submit.addEventListener("click", () => {
    const isStudent = document.getElementById("yes").checked;
    const sapIdInput = document.getElementById("sapid").value;

    if (!isStudent || (isStudent && sapIdRegex.test(sapIdInput))) {
        alert("Form submitted successfully!");
        // Additional logic to handle form submission
    } else {
        alert("Invalid SAP ID format. Please enter a 11-digit number.");
    }
});


