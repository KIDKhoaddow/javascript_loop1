function printArr(){
    let timeToLoop= parseInt(prompt("Xin mời nhập số vài một vào:"));

    let text=""

    for(let i=1;i<=timeToLoop;i++){
        text+= "The number is "+i+"\n";
    }
    document.getElementById("answerEx1").innerText=text;
}

function calSum(){
    let timeToSum= parseInt(prompt("Xin mời nhập số bài một vào:"));
    let sum=0;
    if (timeToSum>0){
        for(let i=0;i<timeToSum;i++){
            sum+=i;
        }
        document.getElementById("answerEx2").innerText="Tổng có phần tử là :"+sum;
    }
    else {
        document.getElementById("answerEx2").innerText="Lỗi chương trình"
    }

}