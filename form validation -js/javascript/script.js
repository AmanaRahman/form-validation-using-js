document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let isValid = true;
  
  
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.style.display = "none");
  
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      isValid = false;
    } else {
      clearError(nameInput);
    }
  
  
    const emailInput = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput);
    }
  
   
    const messageInput = document.getElementById("message");
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message cannot be empty.");
      isValid = false;
    } else {
      clearError(messageInput);
    }
  
   
    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.display = "block";
    }
  });
  
  
  function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    input.classList.add("error");
  }
  
  function clearError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.style.display = "none";
    input.classList.remove("error");
  }
  