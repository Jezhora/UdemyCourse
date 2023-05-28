window.addEventListener('DOMContentLoaded', () => {
//    Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        });
    }      

    function showTabContent(i = 0) {
        // tabsContent[i].style.display ='block';
        // tabs[i].classList.add('tabheader__item_active')
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

    // Timer

    const deadLine = '2023-06-02';

    function getTimeRemaining (endTime) {

        let  days, hours, minutes, seconds;

        const total = Date.parse(endTime) - Date.parse(new Date);

        if (total <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
              days = Math.floor(total / (1000 * 60 * 60 * 24)),
              hours = Math.floor((total / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((total / (1000 * 60)) % 60),
              seconds = Math.floor((total / 1000) % 60);
        }

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    };

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(clockUpdate, 1000);

              clockUpdate();


        function clockUpdate() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        }      
    }

    setClock('.timer', deadLine);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }      

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
    };

    modalCloseBtn.addEventListener('click', closeModal)

    // modalCloseBtn.addEventListener('click', () => {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        // modal.classList.toggle('show');
        // document.body.style.overflow ='';
    // });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // modal.addEventListener('click', (e) => {
    //     if (e.target === modal) {
    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //     }
    // })
   
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // const modalTimerId =setTimeout(openModal, 6000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Use classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, prise, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.prise = prise;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.prise = this.prise * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element)
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    // const div = new MenuCard();
    // div.render();

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();


});