
var arr = [4,2,7,3,10,6,15,9,30]
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let middleIndex = Math.floor(arr.length / 2 )
    let middleArr = arr.splice(middleIndex,1) 
    let left  = []
    let right = []
    arr.forEach(item => {
        if(item < middleArr[0]){
            left.push(item)
        } else {
            right.push(item)
        }
    })
    return quickSort(left).concat(middleArr,quickSort(right))
}
let newArr = quickSort(arr)
console.log(newArr) // [2,3,4,6,7,9,10,15,30]