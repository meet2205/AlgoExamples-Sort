function sort(arr){
    const copiedArray = [...arr];

    if(copiedArray<=1){
        return copiedArray;
    }

    const smallerElementsArray = []
    const biggerElementsArray = []
    const pivotElement = copiedArray.shift();
    const centerElementsArray = [pivotElement]

    while(copiedArray.length){
        const currentElement = copiedArray.shift();

        if(currentElement === pivotElement){
            centerElementsArray.push(currentElement)
        }else if(currentElement< pivotElement){
            smallerElementsArray.push(currentElement)
        }else{
            biggerElementsArray.push(currentElement)
        }
    }

    const smallerSortedArray = sort(smallerElementsArray);
    const biggerSortedArray = sort(biggerElementsArray);
    const finalSortedArray = smallerSortedArray.concat(centerElementsArray, biggerSortedArray);
    return finalSortedArray;
    //console.log(finalSortedArray);
}

const QSortArray = sort([6,1,63,22,-5,-9,40,0])
console.log(QSortArray);