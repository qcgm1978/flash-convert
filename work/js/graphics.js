import Utilities from './utilities'
class Graphics {
    constructor(startPos, endPos, widHei, src, ctx) {
        this.widthHeight = widHei;
        this.startpos=startPos
        this.endpos = endPos
        this.x=this.startX=startPos.x
        this.y=this.startY=startPos.y
        this.endX=endPos.x
        this.endY=endPos.y

        this.ctx = ctx
        this.character = this.generateImg(src, startPos, endPos)
    }

    generateImg(src, startPos, endPos) {
        var image = new Image();
        image.src = src
        image.dataset.startpos = startPos
        image.dataset.endpos = endPos
        image.dataset.wh=this.widthHeight
        return image;
    }

    drawImg() {
        let pos = Utilities.getPosArr(this.character).map(curVal=>Number(curVal))
        this.ctx.drawImage(this.character, pos[0], pos[1], this.widthHeight[0], this.widthHeight[1]);
    }

    get ins() {
        return this.character;
    }
    get width(){
        return this.widthHeight.width
    }
    get height(){
        return this.widthHeight.height
    }
}
export default Graphics;