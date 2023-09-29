const tutdropBtn = document.querySelector("#tutdrop-btn");
const tutdropBtnIcon = document.querySelector("#tutdrop-btn i");
const tutdropdownContent =document.querySelector("#tutdropdown-content");
const exerdropBtn = document.querySelector("#exerdrop-btn");
const exerdropBtnIcon = document.querySelector("#exerdrop-btn i");
const exerdropdownContent =document.querySelector("#exerdropdown-content");


tutdropBtn.addEventListener("click",()=>{
exerdropdownContent.classList.add("exercontents-dropdown")
    tutdropdownContent.classList.toggle("tutcontents-dropdown");
    tutdropBtnIcon.classList.toggle("bx-flip-vertical");
})
exerdropBtn.addEventListener("click",()=>{

    tutdropdownContent.classList.add("tutcontents-dropdown")
    exerdropdownContent.classList.toggle("exercontents-dropdown");
    exerdropBtnIcon.classList.toggle("bx-flip-vertical");
})

// li of sidebar tutorial->
const htmtut  = document.querySelector("#htmtut");
const csstut = document.querySelector("#csstut");
const jstut = document.querySelector("#jstut");
const dbmstut = document.querySelector("#dbmstut");
const plsqltut = document.querySelector("#plsqltut");

// content of tutorial->
const htmtutcontent  = document.querySelector("#htmtutcontent");
const csstutcontent = document.querySelector("#csstutcontent");
const jstutcontent = document.querySelector("#jstutcontent");
const dbmstutcontent = document.querySelector("#dbmstutcontent");
const plsqltutcontent = document.querySelector("#plsqltutcontent");

// for tutorial dropdown
// default ->
htmtutcontent.setAttribute("style","display:block;")


// conditions for tut dropdown
htmtut.addEventListener("click", () => {
    htmtut.classList.add("active");
    csstut.classList.remove("active");
    jstut.classList.remove("active");
    dbmstut.classList.remove("active");
    plsqltut.classList.remove("active");
    htmtutcontent.setAttribute("style","display:block;")
    csstutcontent.setAttribute("style","display:none;")
    jstutcontent.setAttribute("style","display:none;")
    dbmstutcontent.setAttribute("style","display:none;")
    plsqltutcontent.setAttribute("style","display:none;")
});
csstut.addEventListener("click", () => {
    htmtut.classList.remove("active");
    csstut.classList.add("active");
    jstut.classList.remove("active");
    dbmstut.classList.remove("active");
    plsqltut.classList.remove("active");
    htmtutcontent.setAttribute("style","display:none;")
    csstutcontent.setAttribute("style","display:block;")
    jstutcontent.setAttribute("style","display:none;")
    dbmstutcontent.setAttribute("style","display:none;")
    plsqltutcontent.setAttribute("style","display:none;")
});
jstut.addEventListener("click", () => {

    htmtut.classList.remove("active");
    csstut.classList.remove("active");
    jstut.classList.add("active");
    dbmstut.classList.remove("active");
    plsqltut.classList.remove("active");
    htmtutcontent.setAttribute("style","display:none;")
    csstutcontent.setAttribute("style","display:none;")
    jstutcontent.setAttribute("style","display:block;")
    dbmstutcontent.setAttribute("style","display:none;")
    plsqltutcontent.setAttribute("style","display:none;")
});
dbmstut.addEventListener("click", () => {

    htmtut.classList.remove("active");
    csstut.classList.remove("active");
    jstut.classList.remove("active");
    dbmstut.classList.add("active");
    plsqltut.classList.remove("active");
    htmtutcontent.setAttribute("style","display:none;")
    csstutcontent.setAttribute("style","display:none;")
    jstutcontent.setAttribute("style","display:none;")
    dbmstutcontent.setAttribute("style","display:block;")
    plsqltutcontent.setAttribute("style","display:none;")
});
plsqltut.addEventListener("click", () => {
    htmtut.classList.remove("active");
    csstut.classList.remove("active");
    jstut.classList.remove("active");
    dbmstut.classList.remove("active");
    plsqltut.classList.add("active");


    htmtutcontent.setAttribute("style","display:none;")
    csstutcontent.setAttribute("style","display:none;")
    jstutcontent.setAttribute("style","display:none;")
    dbmstutcontent.setAttribute("style","display:none;")
    plsqltutcontent.setAttribute("style","display:block;")
});


// for exercises dropdown

const htmexer  = document.querySelector("#htmexer");
const cssexer = document.querySelector("#cssexer");
const jsexer = document.querySelector("#jsexer");

// content of tutorial->
const htmexercontent  = document.querySelector("#htmexercontent");
const csexercontent = document.querySelector("#cssexercontent");
const jsexercontent = document.querySelector("#jsexercontent");
// for tutorial dropdown
// default ->
htmexercontent.setAttribute("style","display:block;")


// conditions for tut dropdown
htmexer.addEventListener("click", () => {
    htmexer.classList.add("active");
    cssexer.classList.remove("active");
    jsexer.classList.remove("active");
    htmexercontent.setAttribute("style","display:block;")
    cssexercontent.setAttribute("style","display:none;")
    jsexercontent.setAttribute("style","display:none;")
});
cssexer.addEventListener("click", () => {
    htmexer.classList.remove("active");
    cssexer.classList.add("active");
    jsexer.classList.remove("active");
    htmexercontent.setAttribute("style","display:none;")
    cssexercontent.setAttribute("style","display:block;")
    jsexercontent.setAttribute("style","display:none;")
});
jsexer.addEventListener("click", () => {

    htmexer.classList.remove("active");
    cssexer.classList.remove("active");
    jsexer.classList.add("active");
    htmexercontent.setAttribute("style","display:none;")
    cssexercontent.setAttribute("style","display:none;")
    jsexercontent.setAttribute("style","display:block;")
    
});


const searchbar = document.querySelector(".search-bar");
searchbar.addEventListener("click",()=>{
    alert("searching feature is under development phase")
})