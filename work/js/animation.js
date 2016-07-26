import Utilities from './utilities'
var RenderObj = class {
    constructor(graphic) {
        this.ini = true;
        this.obj = null;
        this.isEndAnimate = false;
        this.rate = 10
        this.graphic = graphic
        this.width = graphic.width
        this.height = graphic.height
        //this.character = this.generateImg(src, startPos, endPos)
    }

    clearReact(ele) {
        var pos = [], src = ''
        if (typeof ele === 'object') {
            pos = Utilities.getPosArr(ele)
            src = ele.getAttribute('src')
        } else {
            pos = Utilities.getPosArr(this.obj)
            src = this.obj.getAttribute('src')
        }
        this.obj = this.graphic.generateImg(src, pos)
        let posEnd = this.getAnimateEndPos()
        if (this.graphic.endpos[0] < posEnd[0] || this.graphic.endpos[1] < posEnd[1]) {
            this.isEndAnimate = true;
            return;
        } else {
        }
        this.graphic.ctx.clearRect(pos[0], pos[1], this.width, this.height);
    }

    getAnimateEndPos() {
        let pos = Utilities.getPosArr(this.obj);
        pos[0] += this.rate
        return pos
    }

    redrawImg() {
        if (!this.isEndAnimate) {
            var pos = this.getAnimateEndPos()
            this.graphic.ctx.drawImage(this.obj, pos[0], pos[1], this.width, this.height);
            this.obj = this.graphic.generateImg(this.obj.getAttribute('src'), pos)
        }
    }

    restore() {
        this.graphic.ctx.restore()
    }
}
export default RenderObj