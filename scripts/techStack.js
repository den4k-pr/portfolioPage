const techStackList = document.getElementById("techStackList")
const stacksArray = ["html", "css", "sass", "bootstrap", "tailwindcss", "js", "typescript", "nodejs", "mongodb", "react", "redux", "nextjs", "graphql", "webpack", "gulp", "git"];
stacksArray.forEach((el) => {
    techStackList.innerHTML += `<img src="./images/stacks/${el}.png" width="40" height="40" alt="${el}">`
})
