let firstName = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let btn = document.querySelector("button");
let form = document.querySelector("form");
// btn.addEventListener("click", () => {
//   console.log(firstName.value);
//   console.log(lastname.value);
//   console.log(username.value);
//   console.log(password.value);
//   console.log(confirmPassword.value);
// });

function handleSubmit(event) {
  event.preventDefault();
  let FormData = new FormData(form);
  let data = Object.fromEntries(FormData);
  let jsonData = JSON.stringify(data);
  fetch(`http://localhost:3000/posts`, {
    method: `POST`,
    headers: { "Content-Type": "application/json" },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
