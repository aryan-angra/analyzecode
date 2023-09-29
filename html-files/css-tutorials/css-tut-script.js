
const landingpage = document.querySelector(".landingpage"),
footer = document.querySelector(".footer"),
//  sidebar = document.querySelector(".tut-content-sidebar"),
//  sharePool = document.querySelector(".share-pool-block"),
countbtn = document.querySelector(".countme");
let btncount = document.querySelector(".count");
let count = 0;
// fetch('cstoparea.html')
// .then(component => component.text())
// .then(data=>{
// landingpage.innerHTML =data
// });
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
// fetch('sidebar.html')
// .then(component => component.text())
// .then(data=>{
//   sidebar.innerHTML=data
// })

const All_Details = document.querySelectorAll('details');

All_Details.forEach(deet=>{
deet.addEventListener('toggle', toggleOpenOneOnly)
})

function toggleOpenOneOnly(e) {
if (this.open) {
 All_Details.forEach(deet=>{
   if (deet!=this && deet.open) deet.open = false
 });
}
}

