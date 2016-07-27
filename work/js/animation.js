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
        var newVar = 0
        if (item.endX > item.startX) {
            newVar = item.x + this.rate;
            item.x = (newVar > item.endX) ? item.endX : newVar
        } else if (item.endX < item.startX) {
            newVar = item.x - this.rate;
            item.x = newVar < item.endX ? item.endX : newVar
        }
        //if (item.endY>item.startY) {
        //    item.y-=this.rate
        //}else if (item.endY<item.startY) {
        //    item.y += this.rate
        //}
        return item
    }

    redrawImg() {
        var length = this.list.length;
        var arr = [...Array(length)].map(()=>false)
        for (let i = 0; i < length; i++) {
            if (!this.isEndAnimate) {
                var item = this.list[i];
                this.setAnimateEndPos(item)
                var x = item.x;
                var y = item.y;
                this.ctx.drawImage(item.character, x, y, item.width, item.height);
                var isEnd = item.x == item.endX && item.y == item.endY
                if (isEnd) {
                    arr[i] = true
                }
            }
        }
        if (arr.every(Boolean)) {
            this.isEndAnimate = true;
        }
    }

    isTweenY(item) {
        return item.y != item.endY
    }

    isTweenX(item) {
        return item.x != item.endX
    }

    restore() {
        this.ctx.restore()
    }
}
export default Animations