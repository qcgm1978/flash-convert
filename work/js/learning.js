var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function generateImg(src, pos, endPos) {
    var image = new Image();
    image.src = src
    image.dataset.pos = pos
    image.dataset.endpos = endPos
    return image;
}
function getPosArr(imgElem) {
    return imgElem.dataset.pos.split(',').map((curVal)=> {
        return Number(curVal)
    });
}
function drawImg(imgElem) {
    var pos = getPosArr(imgElem).map(curVal=>Number(curVal))
    ctx.drawImage(imgElem, pos[0], pos[1], pos[2], pos[3]);
}
var RenderObj = class {
    constructor(ele) {
        this.ini = true;
        this.obj = null;
        this.isEndAnimate = false;
        this.rate = 10
        this.endpos = ele.dataset.endpos.split(',')
    }

    clearReact(ele) {

        var pos = [], src = ''
        if (typeof ele === 'object') {
            pos = getPosArr(ele)
            src = ele.getAttribute('src')
        } else {
            pos = getPosArr(this.obj)
            src = this.obj.getAttribute('src')
        }
        this.obj = generateImg(src, pos)
        let posEnd = this.getAnimateEndPos()
        if (this.endpos[0] < posEnd[0] || this.endpos[1] < posEnd[1]) {
            this.isEndAnimate = true;
            return;
        } else {
        }
        ctx.clearRect(pos[0], pos[1], pos[2], pos[3]);
    }

    getAnimateEndPos() {
        let pos = getPosArr(this.obj);
        pos[0] += this.rate
        return pos
    }

    redrawImg() {
        if (!this.isEndAnimate) {
            var pos = this.getAnimateEndPos()
            ctx.drawImage(this.obj, pos[0], pos[1], pos[2], pos[3]);
            this.obj = generateImg(this.obj.getAttribute('src'), pos)
        }
    }
    restore() {
        ctx.restore()
    }
}
var imageBg = generateImg('images-startup/bg.png', [0, 0, 600, 500]);
let startPos = [-243, 236], endPos = [150, 285];
var posHorse = startPos.concat([200, 179]);
var imageHorse = generateImg('images-startup/horse.png', posHorse, endPos)
window.addEventListener("load", function () {
    //drawImg(imageBg);
    drawImg(imageHorse);
    animateHorse(imageHorse)
});
function loop() {
    requestAnimationFrame(animateHorse.bind(RenderObj.obj))
}
var renderObj = new RenderObj(imageHorse)
function animateHorse(ele) {
    requestAnimationFrame(()=> {
        renderObj.clearReact(ele);
        ctx.save()
        renderObj.redrawImg()
        renderObj.restore()
        loop(ele);
    })
}