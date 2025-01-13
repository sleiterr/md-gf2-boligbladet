// form submit event handler

document.querySelector("#order-data").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.currentTarget;
  const user = form.elements.firstName.value.trim();
  const email = form.elements.email.value.trim();

  const selectMonths = document.querySelector("#order-time-dropdown");
  const label = document.querySelector(".input-title-email");
  const message = document.querySelector(".mesg");
  const heading = document.querySelector(".subscription-title");

  message.innerHTML = "";
  label.style.display = "block";
  //   message.style.display = "none";

  if (user === "" || email === "" || selectMonths.value === "month") {
    alert("All form fields must de filled in");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    label.style.display = "none";
    // console.log("not valid email");
    message.innerHTML = "not valid email";
    message.style.color = "navy";
    message.style.display = "block";
    return;
  }

  form.style.display = "none";
  heading.innerHTML = "we will contact you";
  heading.style.display = "block";

  // object
  const formData = {
    name: user,
    email: email,
    selectMonths: selectMonths.value,
  };

  console.log(formData);
  form.reset();
});
