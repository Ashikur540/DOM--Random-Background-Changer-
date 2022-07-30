window.onload = () => {
    main();
};

function main() {
    const Bg = document.getElementById('root');
    const cta = document.getElementById('change-btn');
    const alpha = document.getElementById('opacity-btn');

    // bg changer
    cta.addEventListener('click', function () {
        const bgColor = rgbColorGenerator();
        Bg.style.backgroundColor = bgColor;
    });
    // .opacity
    alpha.addEventListener("click", function () {
        var opvalue = Math.random();
        Bg.style.opacity = opvalue;
    })
}


function rgbColorGenerator() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`; 
}
