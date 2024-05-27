const title = document.querySelector(".hello h1");

function handleTitleClick() {

    let currentColor = title.style.color;
    let newColor;

    if (currentColor === "tomato") {
        newColor = "blue"
    } else {
        newColor = "tomato"
    }

    title.style.color = newColor;

}

title.addEventListener("click", handleTitleClick);