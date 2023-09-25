const btn = document.getElementById("btn");
const dogChat = document.getElementById("chat");
let counter = 0;



const handleCounter = () => {   
    counter++;
    counter > 10 ? dogChat.innerText = "Stop it!" : dogChat.innerText = counter;
    if(dogChat.value === "Stop it!") {
        btn.disabled = true;
    }
}

btn.addEventListener("click", handleCounter)