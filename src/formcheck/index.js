// find button 
const formcheckButton = document.getElementById("check-button");
console.info (formcheckButton);
const formInput = document.getElementById("form-input")
console.info (formInput);
// add click handler
formcheckButton.addEventListener("click", () => {
    // check input and show alert
    // show alert
    // show message 
    const isValidData = (formInput.value.length >= 4 && formInput.value.length <= 10);
    const isAdminUser = (formInput.value.toLowerCase().trim() === "admin");


    console.info(formInput.value, formInput.value.length)
    if (isAdminUser && isValidData) {
         window.alert("Welcome admin");
    }
    else if (!isValidData) {
     window.alert ("Incorrect data");
     
    }
    else {
        window.alert ("Incorrect Password");
    }
        
}) 