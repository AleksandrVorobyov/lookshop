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
            megaLinkItem.style.zIndex='-100';
            megaLinkItem.style.transform='translateY(-140px) rotateX(-90deg)';
        }
    
        item.onmouseover = function() {
            megaLinkItem.style.opacity='1';
            megaLinkItem.style.zIndex='1000';
            megaLinkItem.style.transform='translateY(0px) rotateX(0deg)';
        };
    })
};

const moreBtnMobile = document.querySelector('#mobile-more-btn');

if (moreBtnMobile != null) {
    const allMobileShopCard = document.querySelector('.shop-mobile__cards');
    moreBtnMobile.addEventListener('click', function() {
        const MobileShopCard = allMobileShopCard.querySelectorAll('.shop__card');
        MobileShopCard.forEach(function(item) {
            item.classList.remove('hidden');
        })
    })
}

const moreBtnSale = document.querySelector('#sale-btn-more');
if (moreBtnSale != null) {
    const allSaleShopCard = document.querySelector('.sale__cards-wrap');
    moreBtnSale.addEventListener('click', function() {
        const SaleShopCard = allSaleShopCard.querySelectorAll('.shop__card');
        SaleShopCard.forEach(function(item) {
            item.style.display='block';
        })
    })
}

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

window.onscroll = function showHeader() {
    const header = document.querySelector('.header-wrapper');
    if (window.innerWidth > 768 & window.innerWidth < 1000) {
        if (window.pageYOffset > 200) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    } else if (window.innerWidth > 1000) {
        if (window.pageYOffset > 135) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    }
}
