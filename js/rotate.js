(function() {
function changeClass(){
    if(document.getElementById("block").className == "block"){
        document.getElementById("block").className += " rotated";
    }
    else{
        document.getElementById("block").className = "block";
    }
}
})();
