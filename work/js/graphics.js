import Utilities from './utilities'
class Graphics {
    constructor(startArr, endArr, widHeiArr, src, ctx) {
        let startPos = startArr, endPos = endArr;
        this.widthHeight = widHeiArr;
        this.endpos = endPos
        this.ctx = ctx
        //this.renderObj = new RenderObj(src, posHorse, endPos, ctx)
        this.character = this.generateImg(src, startPos, endPos)
    }

    generateImg(src, pos, endPos) {
        var image = new Image();
        image.src = src
        image.dataset.pos = pos
        image.dataset.endpos = endPos
        //image.dataset.widthHeight=this.widthHeight
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
        return this.widthHeight[0]
    }
    get height(){
        return this.widthHeight[1]
    }
}
export default Graphics;