//create a function that takes an array of arrays and returns a single new array with largest numbers of each.
// Example: findMaxNumbers([[1,2,3],[4,5,6],[7,8,9]]) -> [3,6,9]
function findMaxnumbers(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let maxNumber = arr[i][0]
        for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > maxNumber) {
        maxNumber = arr[i][j]
        }
        }
        newArr.push(maxNumber)
    }
    return newArr
}
