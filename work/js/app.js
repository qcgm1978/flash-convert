//var utilities=new Utilities()
import Animations from './animation'
import Graphics from './graphics'
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var renderHorse = new Graphics({x: -243, y: 236}, {x: 150, y: 285}, {
    width: 200, height: 179
}, 'images-startup/horse.png', ctx);
var renderTree = new Graphics({x: -230, y: 497}, {x: -230, y: -7}, {
    width: 615, height: 664
}, 'images-startup/tree.png');
//var renderTree = new Graphics({x:-230, y:-7}, {x:-230,y: -7}, {width:615, height:664}, 'images-startup/tree.png',ctx);
window.addEventListener("load", function () {
    animate.animateCanvas()
    //animateHorse(renderTree.character)
});
var animate = new Animations([renderHorse, renderTree], ctx)
//console.log(animate.time);
//setTimeout(()=> {
//var animate1=new Animations(renderHorse)
//    console.log(animate1.time);
//}, 1000);

