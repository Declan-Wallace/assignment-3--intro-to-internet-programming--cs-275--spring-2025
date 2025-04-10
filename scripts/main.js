// Hide any initial nav
document.addEventListener(`DOMContentLoaded`, () => {
    const nav = document.querySelector(`nav`);
    if (nav) {
        nav.style.display = `none`;
    }
