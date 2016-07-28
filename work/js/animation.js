//import _ from '../bower_components/underscore/underscore'
import {CanvasWidth,CanvasHeight} from './constant'
//import Utilities from './utilities'
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

        this.ctx.clearRect(0, 0, CanvasWidth, CanvasHeight);
    }

    setAnimateEndPos(item) {
        let x = 0, y = 0;
        if (_.isUndefined(item.x)) {
            this.iniPos(item, 0);
        }
        if (item.hasLoop) {
            this.loopSegment(item);
        }
        if (item.endX > item.startX) {
            x = item.x + item.rate;
            item.x = (x > item.endX) ? item.endX : x
        } else if (item.endX < item.startX) {
            x = item.x - item.rate;
            item.x = x < item.endX ? item.endX : x
        }
        if (item.endY > item.startY) {
            y = item.y + item.rate;
            item.y = y > item.endY ? item.endY : y
        } else if (item.endY < item.startY) {
            y = item.y - item.rate;
            item.y = y < item.endY ? item.endY : y
        }
        return item
    }

    loopSegment(item) {
        if (item.x == item.endX && item.y == item.endY) {
            item.path.shift()
            if (item.path.length < 2) {
                if (item.loopNum == item.loopPath.length - 1) {
                    item.loopPath.reverse()
                    item.loopNum = 0
                }
                let obj = this.iniPos({
                    path: item.loopPath
                }, item.loopNum)
                item.loopNum++
                delete obj.path
                _.extend(item, obj)
            } else {
                this.iniPos(item, 0)
            }
        }
    }

    iniPos(obj, startInd) {
        var variable = 1;
        var path = obj.path;
        obj.endX = path[startInd + variable].x
        obj.endY = path[startInd + variable].y
        obj.x = obj.startX = path[startInd].x
        obj.y = obj.startY = path[startInd].y
        return obj;
    }

    redrawImg() {
        let length = this.list.length;
        let arr = [...Array(length)].map(()=>false)
        for (let i = 0; i < length; i++) {
            if (!this.isEndAnimate) {
                let item = this.list[i];
                this.setAnimateEndPos(item)
                let x = item.x;
                let y = item.y;
                this.ctx.drawImage(item.character, x, y, item.width, item.height);
                let isEnd = item.x == item.endX && item.y == item.endY
                if (isEnd && !item.hasLoop) {
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