import Utilities from './utilities'
class Graphics {
    constructor(config, ctx) {
        this.config = config
        this.widthHeight = config.metrics;
        this.startpos = config.path.start
        this.endpos = config.path.end
        this.rate = config.rate || 10
        if (config.loop) {
            this.hasLoop = true
            let lastEle = config.path[config.path.length - 1]
            this.loopPath = config.path.slice(config.loop[0], config.loop[1] + 1)
            this.loopPath.unshift(lastEle)
            this.loopNum = 0
        } else {
            this.hasLoop = false
        }
        this.path = config.path
        this.ctx = ctx
        this.character = this.generateImg(config.src, this.startpos, this.endpos)
    }

    generateImg(src, startPos, endPos) {
        let image = new Image();
        image.src = src
        return image;
    }

    drawImg() {
        let pos = Utilities.getPosArr(this.character).map(curVal=>Number(curVal))
        this.ctx.drawImage(this.character, pos[0], pos[1], this.widthHeight[0], this.widthHeight[1]);
    }

    get width() {
        return this.widthHeight.width
    }

    get height() {
        return this.widthHeight.height
    }
}
export default Graphics;