function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
}
function scrollToBottom(distance = 200) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Обчислюємо відстань від низу сторінки, до якої потрібно прокрутити
    const scrollTo = documentHeight - windowHeight - distance;

    // Прокручуємо сторінку до потрібної позиції
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