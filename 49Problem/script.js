const loginForm = document.getElementById("submitForm")

loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const username = document.getElementById('username').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;


  // regex for the input validation
  let nameRegex = /^[A-Za-z ]{3,20}$/;
  let numberRegex = /^[6-9][\d]{9}$/;
  let emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/



  console.log(`Username: ${username}, Number: ${number}, Email: ${email}, Password: ${password}, Confirm Password: ${confirm_password}`)
})
