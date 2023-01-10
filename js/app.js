const button = document.querySelector("button");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const alertMessage = document.querySelector(".alert");
let inputValue;

document.addEventListener("click", function (e) {
    if (e.target.className === "input") {
        inputValue = e.target.value;
    }

});

button.addEventListener("click", function (e) {
    front.classList.add("active")
    back.classList.remove("active")
    console.log(inputValue);
    alertMessage.innerHTML = `You selected ${inputValue} out of 5`;
    setTimeout(() => {
        front.classList.remove("active")
        back.classList.add("active")
    }, 3000);
});