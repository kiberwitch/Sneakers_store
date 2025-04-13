function s1crollLeft() {
  const container = document.querySelector(".scroll-wrapper");
  if (container) {
    container.scrollBy({ left: -300, behavior: "smooth" });
  } else {
    console.error("Элемент .scroll-wrapper не найден!");
  }
}

function s1crollRight() {
  const container = document.querySelector(".scroll-wrapper");
  if (container) {
    container.scrollBy({ left: 300, behavior: "smooth" });
  } else {
    console.error("Элемент .scroll-wrapper не найден!");
  }
}
