const codingArray = ["html", "css", "sass", "js", "typescript"];
const backendArray = ["nodejs", "mongodb"];
const libraryArray = ["react", "redux", "nextjs", "graphql", "bootstrap", "tailwindcss"];
const toolsArray = ["webpack", "gulp"];

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const appendSkills = (list, array) => {
    list.innerHTML = array.map(item => `
        <nav class="skills__body__content_section">
            <img src="./images/stacks/${item}.png" width="35" height="35" alt="${item}">
            <h3 class="skills__body__content_section_title">${capitalizeFirstLetter(item)}</h3>
        </nav>`).join('');
};

appendSkills(document.getElementById("coding"), codingArray);
appendSkills(document.getElementById("backend"), backendArray);
appendSkills(document.getElementById("library"), libraryArray);
appendSkills(document.getElementById("tools"), toolsArray);
