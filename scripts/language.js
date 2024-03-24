const languagesList = document.getElementById("languages");
const langItems = document.querySelectorAll(".lang-changeContent")
const languaageBox = document.getElementById("languaageBox");

window.onload = () => {

    var lang = window.location.hash.substring(1)

    fetch(`../languages/${lang || "en"}.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Не вдалося завантажити JSON');
        }
        return response.json(); // парсинг JSON-боді
    })
    .then(data => {
        langItems.forEach((item, index) => {
            item.textContent = data.item[index];
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
        
    languaageBox.innerHTML = `<img src="./images/lang/${lang || "en"}.png" alt="" width="30" height="30"><p>${lang.toUpperCase() || "en"}</p>`;
};



const languagesItems = ["ua", "pl", "en"];
const lang = window.location.search.substring(1);

languagesItems.filter((item) => item != lang).forEach((item) => {
    languagesList.innerHTML += `
    <li>
        <a onClick="reloadPage()" class="lang__list_link" href="/#${item}">
            <img src="./images/lang/${item}.png" alt="" width="30" height="30">
            <p>${item.toUpperCase()}</p>
        </a>
    </li>`;
});

function reloadPage() {
    setTimeout(() => {
        location.reload();
    }, 500)
}


languaageBox.addEventListener("click", () => {
    languagesList.classList.toggle("activeMenu")
})

for (let i = 0; i < languagesList.children.length; i++) {
    const el = languagesList.children[i];
    el.addEventListener("click", () => {
        languagesList.classList.remove("activeMenu");
    });
}
