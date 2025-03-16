const showWord = document.querySelector('.word');
const showCharater = document.querySelector('.charater');
function countword(){
    let count= 0;
    let secondcount =0;
    const word = document.getElementById("word").value;
    const split = word.split(" ")
    for(let i=0; i<split.length; i++){
        if(split[i]  !== " "){
            count +=1
        }
    }
    for(let i=0; i<word.length; i++){
        secondcount =i;
        secondcount +=1;

    }
    showWord.textContent=count;
    showCharater.textContent =secondcount
}