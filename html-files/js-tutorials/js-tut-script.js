
   const landingpage = document.querySelector(".landingpage"),
   footer = document.querySelector(".footer"),
  //  sidebar = document.querySelector(".tut-content-sidebar"),
  //  sharePool = document.querySelector(".share-pool-block"),
   countbtn = document.querySelector(".countme");
let btncount = document.querySelector(".count");
let count = 0;
// fetch('topaarea.html')
// .then(component => component.text())
// .then(data=>{
//   landingpage.innerHTML =data
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
function unsuffPass(){
let password = document.validform.password.value; 
if(password.length<6){
  alert("Password must be at least 6 characters long.");  
}
}
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
countbtn.addEventListener("click", () =>{
      count++;
      btncount.innerHTML = count;
});
let colorChangeBtn = document.querySelector("#colorsChangeblock");
let colorsList = ["#A555EC","#ffb013","#0556f3","#332FD0","#FF7000","#22A39F","#0014FF","#001253","#FF6464","#54B435"]
let colorCount = 0;
colorChangeBtn.onclick= () => {
colorCount++;
for(let i=0;i<colorsList.length;i++){
  if(i == colorCount){
      colorChangeBtn.style.backgroundColor = colorsList[i];
  }
  if(colorCount>colorsList.length){
      colorCount = -1;
  }
}
}

