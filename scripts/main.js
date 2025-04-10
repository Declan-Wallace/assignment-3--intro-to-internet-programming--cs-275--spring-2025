// Hide any initial nav
document.addEventListener(`DOMContentLoaded`, () => {
    const nav = document.querySelector(`nav`);
    if (nav) {
        nav.style.display = `none`;
    }

    // Get triggers
    const triggers = document.getElementById(`js-triggers`);
    const showMenuTrigger = triggers.children[0].querySelector(`a`) || triggers.children[0];
    const showModalTrigger = triggers.children[1].querySelector(`a`) || triggers.children[1];

    // Move modalPanel to body
    let modalPanel = document.querySelector(`.modal-panel`);
    if (modalPanel) {
        document.body.appendChild(modalPanel);
    }

    // Append menu to the document body.
    let menu = document.getElementById(`menu`);
    if (!menu) {
        menu = document.createElement(`div`);
        menu.id = `menu`;
        menu.innerHTML = `
     <ul>
       <li><a href="#">Menu 1</a></li>
       <li><a href="#">Menu 2</a></li>
     </ul>
   `;
        document.body.appendChild(menu);
    }
