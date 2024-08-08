window.addEventListener("DOMContentLoaded",()=> {
    const elBtn = document.querySelector(".js-change-mode");

    if(elBtn) {
        elBtn.addEventListener("click", ()=> {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("mode","dark-mode");
        })
    }
})