let bullets = document.querySelectorAll('.bullets i'),
    img     = document.querySelector('.imgBx img'),
    i       = false;

bullets.forEach(bullet => {
    bullet.addEventListener('click', function () {
        [...bullet.parentElement.children].forEach(el => el.classList.remove('active'));
        bullet.classList.add('active');
        img.setAttribute('src', bullet.getAttribute('data-img'));
        img.classList.toggle('anime')
        img.classList.toggle('animee')
    })
});

document.querySelector('.navbar i').addEventListener('click', function () {
    document.querySelector('.bars').style.visibility = "visible";
    document.querySelector('.bars').style.opacity = "1";
    document.querySelector('.sci').style.opacity = "1";
    document.querySelector('.sci').style.visibility = "visible";
});

document.querySelector('.bars i').addEventListener('click', function () {
    document.querySelector('.bars').style.visibility = "hidden";
    document.querySelector('.bars').style.opacity = "0";
    document.querySelector('.sci').style.opacity = "0";
    document.querySelector('.sci').style.visibility = "hidden";
})

