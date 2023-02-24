// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// --------------- Registeration Image Previwer ------------------
function previewImage(input) {
  const preview = document.getElementById('preview');
  const file = input.files[0];
  const reader = new FileReader();
  
  reader.onloadend = function () {
    preview.src = reader.result;
  }
  
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

// ------------------ From Validation -----------------------
function validateForm() {
  // Display massage box
  document.getElementById("notValidMsg").style.display="block";

  // Validate file upload
  const file = document.getElementById("dp");
  if (file.files.length === 0) {
    // alert("Please select a file.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please select your profile picture...";

    return false;
  }
  const allowedTypes = ['image/png', 'image/jpeg'];
  if (!allowedTypes.includes(file.files[0].type)) {
    // alert('Please select a PNG or JPG file.');
    document.getElementById("notValidMsg").innerHTML="&#10060; Please select a PNG or JPG file...";
    file.value = ''; // Clear the input
    return false;
  }

  // Validate first name and last name
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    // alert("Please enter a valid first name and last name.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please enter your first name and last name...";

    return false;
  }

  // Validate gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    // alert("Please select a gender.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please select your gender...";
    return false;
  }

  // Validate date of birth
  const dob = document.getElementById("dob").value;
  if (dob.trim() === "") {
    // alert("Please enter a valid date of birth.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please enter your date of birth...";
    return false;
  }

  // Validate address
  const address = document.getElementById("add").value;
  if (address.trim() === "") {
    // alert("Please enter an address.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please enter your address...";
    return false;
  }

  // Validate nationality
  const nationality = document.getElementById("nationality").value;
  if (nationality.trim() === "") {
    // alert("Please enter a nationality.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please select your nationality...";
    return false;
  }

  // Validate mobile number
  const mobile = document.getElementById("mono").value;
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    // alert("Please enter a valid mobile number.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please enter a valid mobile number...";
    return false;
  }

  // Validate email
  const email = document.getElementById("email").value;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailRegex.test(email)) {
    // alert("Please enter a valid email address.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please enter a valid email address...";
    return false;
  }

  // Validate password
  const password = document.getElementById("pass").value;
  if (password.trim() === "") {
    // alert("Please enter your Password.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please create your account password...";
    return false;
  }
  // Validate check password is confirm
  const confirmPassword = document.getElementById("cpass").value;
  if (password !== confirmPassword) {
    // alert("Passwords do not match.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Passwords do not match...";
    return false;
  }

  // Validate terms and conditions checkbox
  const terms = document.getElementById("t&c");
  if (!terms.checked) {
    // alert("Please agree to the terms and conditions.");
    document.getElementById("notValidMsg").innerHTML="&#10060; Please read and agree to the terms and conditions...";
    return false;
  }

  // If all validations pass, return true to submit the form
  return true;
}
