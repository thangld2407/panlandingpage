var num = 1;
document.getElementById("count-number").innerHTML = 1;
document.getElementById("btn-reduce-product").onclick = btnReduce;
document.getElementById("btn-add-product").onclick = btnAdding;

function btnReduce() {
    if(num >= 2){
        num -= 1;
    }
    document.getElementById("count-number").innerHTML = num;
}
function btnAdding() {
    if(num < 10){
        num+=1;
    }
    document.getElementById("count-number").innerHTML = num;
}