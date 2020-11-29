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
});

window.onload = function () {
    //ищем элемент по селектору
    let megaLink = document.querySelector('#showNew');
    let megaLinkItem = document.getElementById('showNewItem');
    //вешаем на него события
    megaLink.onmouseout = function(e) {
        megaLinkItem.style.opacity='0';
        megaLinkItem.style.transform='rotateX(-90deg)';
    }
  
    megaLink.onmouseover = function(e) {
        megaLinkItem.style.opacity='1';
        megaLinkItem.style.transform='rotateX(0deg)';
    };

    megaLinkItem.onmouseover = function(e) { 
        megaLinkItem.style.opacity='1';
        megaLinkItem.style.transform='rotateX(0deg)';
    }
  };