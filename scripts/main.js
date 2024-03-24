function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}
function scrollToBottom(distance = 200) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const scrollTo = documentHeight - windowHeight - distance;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
}


const burgerButton = document.getElementById("burgerButton")
const headerList = document.getElementById("headerList")

burgerButton.addEventListener("click", () => {
    headerList.classList.toggle("burgerActive")
    burgerButton.classList.toggle("burgerActive")
})

function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });

    headerList.classList.remove("burgerActive")
    burgerButton.classList.remove("burgerActive")
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader')
    loader.classList.add('closePreloader')
  }, 1500)
})
