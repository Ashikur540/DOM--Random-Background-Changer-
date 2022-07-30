window.onload = () => {
    main();
};

function main() {
    const Bg = document.getElementById('root');
    const cta = document.getElementById('change-btn');
    const alpha = document.getElementById('opacity-btn');
    const hexcode = document.getElementById('output');
    const btnCopy = document.getElementById('copy-btn');
    // bg changer
    cta.addEventListener('click', function () {
        const bgColor = rgbColorGenerator();
        Bg.style.backgroundColor = bgColor;
        hexcode.textContent = bgColor;
    });


   
    // .opacity
    alpha.addEventListener("click", function () {
        var opvalue = Math.random();
        Bg.style.opacity = opvalue;
    });

     btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(hexcode.textContent);
        alert("copied successfully👌👌");
    });

}


function rgbColorGenerator() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    // return `rgb(${red.toString(16)}, ${green.toString(16)}, ${blue.toString(16)})`; 
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
