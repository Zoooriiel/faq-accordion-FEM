const iconPlus = document.querySelectorAll('.icon-plus');
const accordionHeaders = document.querySelectorAll('.accordion-header')
const hiddenContent = document.querySelector('.hide-content')
const revealContent = document.querySelector('.reveal-content')



accordionHeaders.forEach(accordionHeader => {

    accordionHeader.addEventListener("click", () => {
        const content = accordionHeader.nextElementSibling;
        const iconMinus = accordionHeader.querySelector("img");

        if (content.classList.contains("hide-content")){
            content.classList.replace("hide-content", "reveal-content");
            iconMinus.src = "assets/images/icon-minus.svg";
        }
        else{
            content.classList.replace("reveal-content", "hide-content");
            iconMinus.src = "assets/images/icon-plus.svg"
        }
    })
});