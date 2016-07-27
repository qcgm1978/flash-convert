var Utilities={
    getPosArr(graphic, dataProp) {
        dataProp = dataProp || 'startpos';
        return graphic.dataset[dataProp].split(',').map((curVal)=> {
            return Number(curVal)
        });
    },
    setEle(graphic,pos) {
        graphic.dataset.startpos=pos
        return graphic
    },
    getX(graphic){
        return this.getPosArr(graphic)[0]
    },
    getY(graphic){
        return this.getPosArr(graphic)[1]
    },
    getWidth(graphic){
        return this.getPosArr(graphic,'wh')[0]
    },
    getHeight(graphic){
        return this.getPosArr(graphic,'wh')[1]
    },
    getEndX(graphic){
        return this.getPosArr(graphic,'endpos')[0]
    },
    getEndY(graphic){
        return this.getPosArr(graphic,'endpos')[1]

    }
}

export default Utilities;