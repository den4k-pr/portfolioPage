const projects = document.querySelectorAll('.portfolio__projects_partBody_part')

projects.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.add("activeProject")
        el.lastElementChild.style.bottom = "50px"
    })
})

document.addEventListener("click", (event) => {
    projects.forEach((el) => {
        if (!el.contains(event.target)) {
            el.classList.remove("activeProject");
            el.lastElementChild.style.bottom = "0px"
        }
    });
});
