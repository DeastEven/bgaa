const burger = document.querySelector('.burger');
const body = document.querySelector('.body');
const navWrapper = document.querySelector('.navigation__wrapper');

const tabsLink = document.querySelectorAll('.tabs__link');
const tabsItem = document.querySelectorAll('.tabs-body__item');





burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('hidden');
    navWrapper.classList.toggle('active');

})

tabsLink.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelectorAll('.' + tabId);


        tabsItem.forEach(item => {
            item.classList.remove('active')
        })
        tabsLink.forEach(item => {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active');
        currentTab.forEach(item => {
            item.classList.add('active');
        })
        if (tabId == 'tab-1') {
            tabsItem.forEach(item => {
                item.classList.add('active')
            })

        }
    })
})

document.querySelector('.tabs__link').click()