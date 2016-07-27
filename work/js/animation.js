import {CanvasWidth,CanvasHeight} from './constant'
import Utilities from './utilities'
let instance = null;
class Animations {
    constructor(graphicArr, ctx) {
        if (!instance) {
            instance = this;
        }
        // to test whether we have singleton or not
        this.time = new Date()
        this.ini = true;
        this.isEndAnimate = false;
        this.rate = 10
        this.ctx = ctx
        this.list = graphicArr
        return instance;
    }

    animateCanvas() {
        this.animationFrame = requestAnimationFrame(()=> {
            this.clearReact();
            this.ctx.save()
            this.redrawImg()
            this.restore()
            if (this.isEndAnimate) {
                cancelAnimationFrame(this.animationFrame)
            } else {
                this.animateCanvas()
            }
        })
    }

    clearReact() {
        if (this.isEndAnimate) {
        }
        this.ctx.clearRect(0, 0, CanvasWidth, CanvasHeight);
    }

    setAnimateEndPos(item) {
        let pos = item
        pos.x += this.rate
        return pos
    }

    redrawImg() {
        for (let i = 0; i < this.list.length; i++) {
            if (!this.isEndAnimate) {
                var item = this.list[i];
                this.setAnimateEndPos(item)
                var x = item.x;
                var y = item.y;
                this.ctx.drawImage(item.character, x, y, item.width, item.height);
                var isMiddlePath = (item.x != Math.max(item.startX, item.x, item.endX) &&
                    item.x != Math.min(item.startX, item.x, item.endX)) ||
                    (item.y != Math.max(item.startY, item.y, item.endY) &&
                    item.y != Math.min(item.startY, item.y, item.endY))
                if (!isMiddlePath) {
                    this.isEndAnimate = true;
                }
            }
        }
    }

    restore() {
        this.ctx.restore()
    }
}
export default Animations