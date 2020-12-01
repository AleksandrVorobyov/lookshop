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
    const megaLink = document.querySelectorAll('.navigation__link-wrap');

    megaLink.forEach(function(item) {
        let megaLinkItem = item.querySelector('.navigation__mega-menu');
        item.onmouseout = function() {
            megaLinkItem.style.opacity='0';
            megaLinkItem.style.transform='rotateX(-90deg)';
        }
    
        item.onmouseover = function() {
            megaLinkItem.style.opacity='1';
            megaLinkItem.style.transform='rotateX(0deg)';
        };
    })
};

const moreBtnMobile = document.querySelector('#mobile-more-btn');
const allMobileShopCard = document.querySelector('.shop-mobile__cards');
const MobileShopCard = allMobileShopCard.querySelectorAll('.shop__card');

moreBtnMobile.addEventListener('click', function(item) {
    MobileShopCard.forEach(function(item) {
        item.classList.remove('hidden');
    })

    // item.scrollByPages(-1);
})

const moreBtnSale = document.querySelector('#sale-btn-more');
const allSaleShopCard = document.querySelector('.sale__cards-wrap');
const SaleShopCard = allSaleShopCard.querySelectorAll('.shop__card');

moreBtnSale.addEventListener('click', function(item) {
    SaleShopCard.forEach(function(item) {
        item.style.display='block';
    })

    // item.scrollByPages(-1);
})

const profileBtn = document.querySelector('#nav-panel-profile');
const profile = document.querySelector('.prifile');
const profileExit = document.querySelector('.profile__exit');

profileBtn.addEventListener('click', function() {
    profile.style.top='0';
    body.style.overflow = 'hidden';
})

profileExit.addEventListener('click', function() {
    profile.style.top='-100%';
    body.style.overflow = 'scroll';
})