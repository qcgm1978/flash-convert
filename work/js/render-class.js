var RenderObj = class {
    constructor(src,startPos,endPos,ctx) {
        this.ini = true;
        this.obj = null;
        this.isEndAnimate = false;
        this.rate = 10
        this.ctx=ctx
        this.endpos = endPos
        this.character = this.generateImg(src, startPos, endPos)
    }

    getPosArr(imgElem) {
        return imgElem.dataset.pos.split(',').map((curVal)=> {
            return Number(curVal)
        });
    }
     drawImg() {
        let pos = this.getPosArr(this.character).map(curVal=>Number(curVal))
        this.ctx.drawImage(this.character, pos[0], pos[1], pos[2], pos[3]);
    }

    clearReact(ele) {
        var pos = [], src = ''
        if (typeof ele === 'object') {
            pos = this.getPosArr(ele)
            src = ele.getAttribute('src')
        } else {
            pos = this.getPosArr(this.obj)
            src = this.obj.getAttribute('src')
        }
        this.obj = this.generateImg(src, pos)
        let posEnd = this.getAnimateEndPos()
        if (this.endpos[0] < posEnd[0] || this.endpos[1] < posEnd[1]) {
            this.isEndAnimate = true;
            return;
        } else {
        }
        this.ctx.clearRect(pos[0], pos[1], pos[2], pos[3]);
    }
     generateImg(src, pos, endPos) {
        var image = new Image();
        image.src = src
        image.dataset.pos = pos
        image.dataset.endpos = endPos
        return image;
    }
    getAnimateEndPos() {
        let pos = this.getPosArr(this.obj);
        pos[0] += this.rate
        return pos
    }

    redrawImg() {
        if (!this.isEndAnimate) {
            var pos = this.getAnimateEndPos()
            this.ctx.drawImage(this.obj, pos[0], pos[1], pos[2], pos[3]);
            this.obj = this.generateImg(this.obj.getAttribute('src'), pos)
        }
    }

    restore() {
        this.ctx.restore()
    }
}
export default RenderObj