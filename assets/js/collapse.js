var coll = document.getElementsByClassName("question-collapsible");
var i;
for(i = 0; i < coll.length; i++ ){
    coll[i].addEventListener("click",function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }
        else {
            content.style.display = "block"
        }
        var colorBtn = this.nextElementSibling;
        if(colorBtn.style.backgroundColor === "#ffffff" & colorBtn.style.color === "#000" & colorBtn.style.border === "1px solid #cfcfcf"){
            colorBtn.style.backgroundColor = "#5d8bb3";
            colorBtn.style.color = "#ffffff";
            colorBtn.style.border = "none";
        }
    })
}