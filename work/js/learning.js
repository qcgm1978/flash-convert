//require('./render-class.js')
import RenderObj from './render-class'
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//var imageBg = generateImg('images-startup/bg.png', [0, 0, 600, 500]);
let startPos = [-243, 236], endPos = [150, 285];
var posHorse = startPos.concat([200, 179]);

var renderObj = new RenderObj('images-startup/horse.png', posHorse, endPos, ctx)
window.addEventListener("load", function () {
    //drawImg(imageBg);
    renderObj.drawImg();
    animateHorse(renderObj.character)
});
function loop() {
    requestAnimationFrame(animateHorse.bind(RenderObj.obj))
}
function animateHorse(ele) {
    requestAnimationFrame(()=> {
        renderObj.clearReact(ele);
        ctx.save()
        renderObj.redrawImg()
        renderObj.restore()
        loop(ele);
    })
}