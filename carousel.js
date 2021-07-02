const carousel = document.querySelector('.grid-carousel');
const slides = document.querySelectorAll('.grid-carousel__item');
const leftButton = document.querySelector('.js-left');
const rightButton = document.querySelector('.js-right');

const getOrder = (elem) => {
    const styles = window.getComputedStyle(elem);
    const orderValue = styles.order;
    const order = parseInt(orderValue);
    return order;
}

const moveRight = () =>{
    slides.forEach(slide =>{
        let order = getOrder(slide);

        if (order < slides.length){
            
            slide.style.order = order += 1;
        }else{
            slide.style.order = 1;
        }
    });
}

const moveLeft = () => {
    slides.forEach(slide => {
        order = getOrder(slide);

        if (order > 1) {
            
            slide.style.order = order -= 1;
        } else {
            slide.style.order = 5;
        }
    });
}

rightButton.addEventListener('click', ()=>{
    moveRight();
});

leftButton.addEventListener('click', ()=>{
    moveLeft();
});