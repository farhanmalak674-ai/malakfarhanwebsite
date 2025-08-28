
function validateForm() {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  return true;
}

setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB'); // 'en-GB' uses 24-hour format
  document.getElementById("clock").innerText = time;
}, 1000);


