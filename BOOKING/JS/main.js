let navber = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = ()=> {
    navber.classList.toggle("active");
};
window.onscroll = ()=> {
    navber.classList.remove("active");
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

document.querySelectorAll(".contact .row .faq .box h3").forEach(a => {
    a.onclick =() => {
        a.parentElement.classList.toggle("active")
    }
});


