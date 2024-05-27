function handleResize() {
  const body = document.body;
  const width = window.innerWidth;

  body.classList.remove("bg-color-1", "bg-color-2", "bg-color-3", "bg-color-4");

  if (width < 600) {
    body.classList.add("bg-color-1");
  } else if (width < 900) {
    body.classList.add("bg-color-2");
  } else if (width < 1200) {
    body.classList.add("bg-color-3");
  } else {
    body.classList.add("bg-color-4");
  }
}

handleResize();

window.addEventListener("resize", handleResize);
