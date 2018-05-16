import "../styles/main.scss";

document.getElementById("app").innerHTML = `
<div class="grid">
  <h1>Pulsing Status Indicator</h1>
</div>
<div class="container">
  <div class="grid">
    <div class="status">
      <div class="pulse">
        <div class="pulse-two"></div>
      </div>
    </div>
  </div>
  <div class="grid mt-7">
    <button id="start" class="shadow animate green">Start</button>
    <button id="stop" class="ml-5 shadow animate red">Stop</button>
  </div>
</div>
`;

document.getElementById("start").addEventListener("click", function() {
  // Remove green status classes
  document.getElementsByClassName("status")[0].classList.remove("status-red");
  document.getElementsByClassName("pulse")[0].classList.remove("pulse-red");
  document.getElementsByClassName("pulse-two")[0].classList.remove("pulse-red");
  // Add red status classes
  document.getElementsByClassName("status")[0].classList.add("status-green");
  document.getElementsByClassName("pulse")[0].classList.add("pulse-green");
  document.getElementsByClassName("pulse-two")[0].classList.add("pulse-green");
});

document.getElementById("stop").addEventListener("click", function() {
  // Remove green status classes
  document.getElementsByClassName("status")[0].classList.remove("status-green");
  document.getElementsByClassName("pulse")[0].classList.remove("pulse-green");
  document
    .getElementsByClassName("pulse-two")[0]
    .classList.remove("pulse-green");
  // Add red status classes
  document.getElementsByClassName("status")[0].classList.add("status-red");
  document.getElementsByClassName("pulse")[0].classList.add("pulse-red");
  document.getElementsByClassName("pulse-two")[0].classList.add("pulse-red");
});
