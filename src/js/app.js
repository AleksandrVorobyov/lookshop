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

moreBtnMobile.addEventListener('click', function() {
    MobileShopCard.forEach(function(item) {
        item.classList.remove('hidden');
    })
})

const moreBtnSale = document.querySelector('#sale-btn-more');
const allSaleShopCard = document.querySelector('.sale__cards-wrap');
const SaleShopCard = allSaleShopCard.querySelectorAll('.shop__card');

moreBtnSale.addEventListener('click', function() {
    SaleShopCard.forEach(function(item) {
        item.style.display='block';
    })
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

const moneyDropdownBtn = document.getElementById('nav-panel-currency');
const moneyDropdownBtnWrap = document.querySelector('.btn-currency__dropdown');
const moneyDropdownBtnItem = document.querySelectorAll('.nav-panel__btn--currency-item');

moneyDropdownBtn.addEventListener('click', function() {
    moneyDropdownBtnWrap.classList.toggle('btn-currency__dropdown--active');
})

moneyDropdownBtnItem.forEach(function(item) {
    item.addEventListener('click', function() {
        let dropdownItemText = moneyDropdownBtn.innerHTML;
        moneyDropdownBtn.innerHTML = this.innerHTML;
        this.innerHTML = dropdownItemText;
        if (moneyDropdownBtnWrap.classList.contains('btn-currency__dropdown--active')) {
            moneyDropdownBtnWrap.classList.remove('btn-currency__dropdown--active');
        }
    })
})

