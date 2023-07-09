const kratos = document.querySelector('.kratos');
const pipe = document.querySelector('.pipe');

const jump = () => {
    kratos.classList.add('jump');

    setTimeout(() => {
        kratos.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const kratosPosition = +window.getComputedStyle(kratos).bottom.replace('px', '');

    console.log(kratosPosition);
    
    if (pipePosition <= 90 && pipePosition > 0 && kratosPosition < 70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        kratos.style.animation = 'none';
        kratos.style.bottom  = `${kratosPosition}px`;

        kratos.src = './images/kra.gif';
        kratos.style.width = '85px'
        kratos.style.marginLeft = '50px'

    }

}, 10);

document.addEventListener('keydown', jump);