function swap (arr, index){
    var temp1 = arr[index]
    var temp2= arr[index+1]
    arr[index] = temp2
    arr[index+1] = temp1
}
function bubbleSort(array) {
    for (var i=0; i<array.length; i++){
        for(var j=0; j<array.length-i; j++){
            if(array[j]>array[j+1]){
                swap(array, j)
            }
        }
    }
    return array
  }