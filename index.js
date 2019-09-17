function findMinAndRemove(array) {
   let minNum = array[0]
   let minIndex = 0
   array.forEach((num, index) => {
      if (num <= minNum) {
         minNum = num
         minIndex = index
      }
   })
   array = array.splice(minIndex, 1)
   return minNum
}

function insertionSort(array) {
   let sorted = []
   let minNum
   while (array.length > 0) {
      minNum = findMinAndRemove(array)
      sorted.push(minNum)
   }
   return sorted
}
