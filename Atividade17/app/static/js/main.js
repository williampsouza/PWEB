const elements = {
    sideMenu: document.querySelector('.side-menu'),
    toggleMenu: document.querySelector('.toggle'),
};

elements.sideMenu.addEventListener('toggleSideMenu', function () {
    this.classList.toggle('active');
});

elements.toggleMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    const event = new Event('toggleSideMenu');
    elements.sideMenu.dispatchEvent(event);
});

