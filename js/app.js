const button = document.querySelector("button");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

button.addEventListener("click", function () {
    front.classList.add("active")
    back.classList.remove("active")

    setTimeout(() => {
        front.classList.remove("active")
        back.classList.add("active")
    }, 3000);
});