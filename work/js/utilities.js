var Utilities={
    getPosArr(imgElem, dataProp) {
        dataProp = dataProp || 'pos';
        return imgElem.dataset[dataProp].split(',').map((curVal)=> {
            return Number(curVal)
        });
    }
}

export default Utilities;