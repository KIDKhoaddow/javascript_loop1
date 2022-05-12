function sum1(){
    let num=parseInt(prompt("Xin hãy nhập một số :"))
    let total=0;
    while (num !=-1){
        total += parseInt(num) ;
        num=parseInt(prompt("Xin hãy nhập một số :"))
    }

    document.getElementById("Result1").innerText="Tổng số là :"+(total-1)

}
function sum2(){
    let total=0;
    let num;
    do{
        num=parseInt(prompt("Xin hãy nhập một số :"))
        total += parseInt(num) ;
    }
    while (num !=-1)
    document.getElementById("Result1").innerText="Tổng số là :"+total

}

function drawPyramid(){
    let i = 1;

    while (i < 100) {
        //phân thân vòng lặp
        document.write("<hr style=width:" + i + "%>");
        i++;
    }
}