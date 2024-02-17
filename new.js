const container = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");
const inputEmail = document.getElementById("email");
const useremail = document.getElementById("useremail");
const erremail = document.getElementById("err-mail");
const submitbtn = document.getElementById("submitbtn");
const success = document.getElementById("success");
const dismissmessage = document.getElementById("Dismiss-message");


submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();
  
    if (email === '') {
      showError(inputEmail, 'Email is required');
    } else if (!isValidEmail(email)) {
      showError(inputEmail, 'Invalid email format');
    } else {
      showSuccess();
      clearError(inputEmail);
      useremail.innerHTML = email;
      inputEmail.value = '';
      
    }
  });


function showError(element, message) {
  const parent = element.parentElement;
  const errMessage = parent.querySelector("#err-mail");
  errMessage.innerHTML = message;
  parent.classList.add("active");
   // Add the input-error class to the input field
   element.classList.add("input-error");
}
function clearError(element) {
    const parent = element.parentElement;
    
    parent.classList.remove("active");
    // Remove the input-error class from the input field
    element.classList.remove("input-error");
  }


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSuccess() {
    left.style.display = 'none';
    right.style.display = 'none';
    success.style.display = 'block';
    container.style.backgroundColor='#36384e';
  }
  dismissmessage.addEventListener('click', () => {
      left.style.display = 'block';
      right.style.display = 'block';
      success.style.display = 'none';
      container.style.backgroundColor='white';
    });

