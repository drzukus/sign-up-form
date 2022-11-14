const form = document.querySelector("form");
form.addEventListener("submit", e => {
    const pass1 = document.querySelector("#pw")
    const pass2 = document.querySelector("#confirm-pw")
    const errorMsg = document.querySelector(".error-msg")
    if (pass1.value !== pass2.value) {
        e.preventDefault()
        pass1.style.border = "1px solid red"
        pass2.style.border = "1px solid red"
        errorMsg.style.display = "block";
    }
});