'use strict'
//////////// функция отвечающая за работу селекта
function select() {
    const option1 = document.querySelector('.option-first .option'),
        selectUl1 = document.querySelector('.select-first'),
        option2 = document.querySelector('.option-second .option'),
        selectUl2 = document.querySelector('.select-second'),
        option1Arrow = document.querySelector('.default-option-arrow'),
        option2Arrow = document.querySelector('.default-option-arrow2');

    /////////// открытие нужного селекта по нажатию
    function selectOpen() {
        option1.addEventListener('click', () => {
            selectUl1.classList.toggle('select-unactive');
            option1Arrow.classList.toggle('rotate');
        });
        option2.addEventListener('click', () => {
            selectUl2.classList.toggle('select-unactive');
            option2Arrow.classList.toggle('rotate');
        });
        option1Arrow.addEventListener('click', () => {
            selectUl1.classList.toggle('select-unactive');
            option1Arrow.classList.toggle('rotate');
        });
        option2Arrow.addEventListener('click', () => {
            selectUl2.classList.toggle('select-unactive');
            option2Arrow.classList.toggle('rotate');
        });
    }
    /////////// добавление выбраного option в начало списка
    function optionactive() {
        const optionS1 = document.querySelectorAll('.select-first .option'),
            optionS2 = document.querySelectorAll('.select-second .option'),
            pGive = document.querySelector('.option-first .li-option'),
            pTake = document.querySelector('.option-second .li-option'),
            inputHideGive = document.querySelector('.input-hide-give'),
            inputHideTake = document.querySelector('.input-hide-take');

        optionS1.forEach((a) => {
            a.addEventListener('click', () => {
                selectUl1.classList.add('select-unactive');
                option1Arrow.classList.toggle('rotate');
                option1.classList.remove('sber');
                option1.innerHTML = a.outerHTML;

                let Give = pGive.textContent.trim()

                if (Give == 'RUB') {
                    inputHideGive.value = Give
                } else if (Give == 'USD') {
                    inputHideGive.value = Give
                } else if (Give == 'UAH') {
                    inputHideGive.value = Give
                } else if (Give == 'BIT') {
                    inputHideGive.value = Give
                } else if (Give == 'ETH') {
                    inputHideGive.value = Give
                }
            });
        });

        optionS2.forEach((a) => {
            a.addEventListener('click', () => {
                selectUl2.classList.add('select-unactive');
                option2Arrow.classList.toggle('rotate');
                option2.classList.remove('paypal');
                option2.innerHTML = a.outerHTML;

                let Take = pTake.textContent.trim()

                if (Take == 'RUB') {
                    inputHideTake.value = Take
                } else if (Take == 'USD') {
                    inputHideTake.value = Take
                } else if (Take == 'UAH') {
                    inputHideTake.value = Take
                } else if (Take == 'BIT') {
                    inputHideTake.value = Take
                } else if (Take == 'ETH') {
                    inputHideTake.value = Take
                }
            });
        });
    }
    optionactive();
    selectOpen();
}


////////./////////// перевод из 1 валюты во 2
function change() {
    const inputTake = document.querySelector('#take'),
        inputGive = document.querySelector('#give'),
        inputHideGive = document.querySelector('.input-hide-give'),
        inputHideTake = document.querySelector('.input-hide-take'),
        arrow = document.querySelector('.CT-arrow');

    window.addEventListener('input', function () {

        if (inputHideGive.value == 'RUB' && inputHideTake.value == 'USD') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.014
        } else if (inputHideGive.value == 'RUB' && inputHideTake.value == 'UAH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.39
        } else if (inputHideGive.value == 'RUB' && inputHideTake.value == 'BIT') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.0000015
        } else if (inputHideGive.value == 'RUB' && inputHideTake.value == 'ETH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.000058
        } else if (inputHideGive.value == 'USD' && inputHideTake.value == 'RUB') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 70.76
        } else if (inputHideGive.value == 'USD' && inputHideTake.value == 'UAH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 27.46
        } else if (inputHideGive.value == 'USD' && inputHideTake.value == 'BIT') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.00011
        } else if (inputHideGive.value == 'USD' && inputHideTake.value == 'ETH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.0041
        } else if (inputHideGive.value == 'UAH' && inputHideTake.value == 'RUB') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 2.58
        } else if (inputHideGive.value == 'UAH' && inputHideTake.value == 'USD') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.036
        } else if (inputHideGive.value == 'UAH' && inputHideTake.value == 'BIT') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.0000039
        } else if (inputHideGive.value == 'UAH' && inputHideTake.value == 'ETH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.00015
        } else if (inputHideGive.value == 'BIT' && inputHideTake.value == 'RUB') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 661463.16
        } else if (inputHideGive.value == 'BIT' && inputHideTake.value == 'USD') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 9345.72
        } else if (inputHideGive.value == 'BIT' && inputHideTake.value == 'UAH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 256620.82
        } else if (inputHideGive.value == 'BIT' && inputHideTake.value == 'ETH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 38.33
        } else if (inputHideGive.value == 'ETH' && inputHideTake.value == 'RUB') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 17235.03
        } else if (inputHideGive.value == 'ETH' && inputHideTake.value == 'USD') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 243.72
        } else if (inputHideGive.value == 'ETH' && inputHideTake.value == 'UAH') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 6692.72
        } else if (inputHideGive.value == 'ETH' && inputHideTake.value == 'BIT') {
            inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.026
        } else {
            inputTake.value = parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)
        }
    });


    window.addEventListener('load', function () {
        inputTake.value = (parseInt(inputGive.value) - parseInt(inputGive.value * 0.005)) * 0.014
    });

    arrow.addEventListener('click', () => {
        let a = inputGive.value;
        inputGive.value = inputTake.value
        inputTake.value = a
    });
}

function slider() {
    const leftArrow = document.querySelector('.slide-arrow-left'),
        rightArrow = document.querySelector('.slide-arrow-right');

    let slideIndex = 1;

    showSlides(slideIndex);

    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    function minusSlide() {
        showSlides(slideIndex -= 1);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.comment-slide');

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'flex';
        slides[slideIndex].style.display = 'flex';
    }

    leftArrow.addEventListener('click', () => {
        minusSlide();
    });

    rightArrow.addEventListener('click', () => {
        plusSlide();
    });

    debugger;

}
slider();
change();
select();
