function split(wholeArray) {
    var firstHalf = [];
    var secondHalf = [];
    // for(var i = 0; i<wholeArray.length; i++){
    //     if(i<(wholeArray.length)/2) firstHalf.push(wholeArray[i])
    //     else secondHalf.push(wholeArray[i])
    // }
    var firstHalf = wholeArray.slice(0,wholeArray.length/2);
    var secondHalf = wholeArray.slice(wholeArray.length/2)
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
    var resultArr = []
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]) resultArr.push(arr1.shift())
        if(arr1[0]>arr2[0]) resultArr.push(arr2.shift())
    }
    resultArr = resultArr.concat(arr1,arr2)
    return resultArr
}

function mergeSort(array){
    if(array.length <= 1) return array
    else
        var izq = mergeSort(split(array)[0])
        var der = mergeSort(split(array)[1])
        return merge(izq, der) 
}
 
