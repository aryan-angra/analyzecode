






// ok tested
const editor = document.querySelector(".codeeditor");
const codeeditorarea =  document.querySelector(".codeeditor-area");
const iframe = document.querySelector(".codegetoutput");
const btn = document.querySelector(".getresult");
const savecode = document.querySelector(".savecode");
const changeorient = document.querySelector(".changeorient");

changeorient.addEventListener("click", ()=>{
    codeeditorarea.setAttribute("style","flex-direction: column;");
    editor.setAttribute("style","width: 100%;max-height: 100px;");
    iframe.setAttribute("style","width: 100%;height: 500px; margin-top: 2%");
});

savecode.addEventListener("click", ()=>{
    alert("Save code in mind, not in your system :)");
});

btn.addEventListener("click", () => {
  var html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


editor.addEventListener("keyup", ()=>{
  var html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


editor.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
