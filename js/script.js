const kratos = document.querySelector('.kratos');

const jump = () => {
    kratos.classList.add('jump');

    setTimeout(() => {
        kratos.classList.remove('jump');
    }, 500)
}

document.addEventListener('keydown', jump);