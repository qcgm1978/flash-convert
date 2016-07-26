//var utilities=new Utilities()
import RenderObj from './render-class'
import Graphics from './graphics'

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var renderHorse = new Graphics([-243, 236], [150, 285], [200, 179], 'images-startup/horse.png',ctx);
var renderTree = new Graphics([-230, 497], [-230, -7], [615, 664], 'images-startup/tree.png');

window.addEventListener("load", function () {
    //drawImg(imageBg);
    renderHorse.drawImg();
    animateHorse(renderHorse.character)
    //animateHorse(renderTree.character)

});
function loop() {
    requestAnimationFrame(animateHorse.bind(RenderObj.obj))
}
var animate=new RenderObj(renderHorse)
function animateHorse(ele) {
    requestAnimationFrame(()=> {
        animate.clearReact(ele);
        ctx.save()
        animate.redrawImg()
        animate.restore()
        loop(ele);
    })
}