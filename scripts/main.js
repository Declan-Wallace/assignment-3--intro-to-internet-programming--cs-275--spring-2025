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

    // Set viewport threshold
    let belowThreshold = window.innerWidth < 736;

    // Modal functions
    const showModal = () => {
        modalPanel.classList.add(`active`);
        const modalContent = modalPanel.querySelector(`.modal-content`);
        if (modalContent && !modalContent.innerHTML.trim()) {
            modalContent.innerHTML = `<p>Any modal content would go here.</p>`;
        }
    };

    const hideModal = () => {
        modalPanel.classList.remove(`active`);
    };

    // Menu functions
    const toggleMenu = () => {
        if (window.innerWidth < 736) {
            menu.classList.remove(`drop-down`);
            menu.classList.add(`side-tray`);
        } else {
            menu.classList.remove(`side-tray`);
            menu.classList.add(`drop-down`);
        }
        menu.classList.toggle(`active`);
    };

    const hideMenu = () => {
        menu.classList.remove(`active`);
    };

    // Add event listeners
    showMenuTrigger.addEventListener(`click`, (e) => {
        e.preventDefault();
        toggleMenu();
    });

    showModalTrigger.addEventListener(`click`, (e) => {
        e.preventDefault();
        showModal();
    });

    // Close modal when clicking off
    if (modalPanel) {
        modalPanel.addEventListener(`click`, (e) => {
            if (e.target === modalPanel) {
                hideModal();
            }
        });
    }

    // Close modal when hitting ESC
    document.addEventListener(`keydown`, (e) => {
        if (e.key === `Escape`) {
            hideModal();
            hideMenu();
        }
    });

    // Reset page after crossing 736px
    window.addEventListener(`resize`, () => {
        const isBelow = window.innerWidth < 736;
        if (isBelow !== belowThreshold) {
            hideMenu();
            if (window.innerWidth >= 736) {
                const headerEl = document.querySelector(`menu`);
                if (headerEl && menu.parentElement !== headerEl) {
                    headerEl.appendChild(menu);
                }
                menu.classList.remove(`side-tray`);
                menu.classList.add(`drop-down`);
            } else {
                if (menu.parentElement !== document.body) {
                    document.body.appendChild(menu);
                }
                menu.classList.remove(`drop-down`);
                menu.classList.add(`side-tray`);
            }
            belowThreshold = isBelow;
        }
    });
});
