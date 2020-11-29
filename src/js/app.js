const sidebarBtn = document.querySelector('#sidebar-btn');
const body = document.querySelector('body');

sidebarBtn.addEventListener('click', function() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('navigation__sidebar--hidden');

    if(this.classList.contains('navigation__mobile-burger--active')) {
        this.classList.remove('navigation__mobile-burger--active');
        body.style.overflow = 'scroll';
    } else {
        this.classList.add('navigation__mobile-burger--active');
        body.style.overflow = 'hidden';
    }
})