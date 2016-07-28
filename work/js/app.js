//let utilities=new Utilities()
import {Resource} from './resource'
import Animations from './animation'
import Graphics from './graphics'
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
function generateGraphic(param) {
    return new Graphics(param,ctx)
}

let arrSource = []
for (let p in Resource) {
    arrSource.push(generateGraphic(Resource[p])
)
}
//let renderHorse = generateGraphic(horse);
//let renderTree = generateGraphic(tree);
//let renderTree = new Graphics({x:-230, y:-7}, {x:-230,y: -7}, {width:615, height:664}, 'images-startup/tree.png',ctx);
let animate = new Animations(arrSource, ctx)
window.addEventListener("load", function () {
    animate.animateCanvas()
    //animateHorse(renderTree.character)
});
//console.log(animate.time);
//setTimeout(()=> {
//let animate1=new Animations(renderHorse)
//    console.log(animate1.time);
//}, 1000);

