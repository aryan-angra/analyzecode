const landingpage = document.querySelector(".landingpage"),
footer = document.querySelector(".footer");
fetch('js-ex-topaarea.html')
.then(component => component.text())
.then(data=>{
landingpage.innerHTML =data
});
// fetch('sharePool.html')
// .then(component => component.text())
// .then(data=>{
//   sharePool.innerHTML = data
// });
fetch('../footer.html')
.then(component => component.text())
.then(data=>{
footer.innerHTML = data
});