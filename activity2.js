function back(){
    window.location="activity_1.html";
}
function Getscore(){
    var score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>SCORE:" +score+"</h1>";
}