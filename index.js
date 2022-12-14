const myEach = (collection, callback) => {
  let objVals = ogCollection(collection)
  for (let i = 0; i < objVals.length; i++){
    callback(objVals[i])
  }
  return collection
}
const ogCollection = collection => {
  return (collection instanceof Array ? collection.slice() : Object.values(collection))
}

const myMap = (collection, callback) => {
  let newArray = []
  let breakDown = ogCollection(collection)
  for(let i = 0; i < breakDown.length; i++){
    newArray.push(callback(breakDown[i]))
  }
  return newArray
}

/*
*/
const myReduce = (collection, callback, acc) => {
  let filteredArray = ogCollection(collection)
  acc = acc || filteredArray.shift()
  for(let number in filteredArray){
  acc = callback(acc, filteredArray[number], collection)
  }
  return acc
}

const myFind = (collection, predicate) => {
  for(let number in collection){
    let selectedNumber = collection[number]
    // console.log("this is predicate:", predicate)
    // console.log(selectedNumber)
    // if (predicate === selectedNumber){
    //   return selectedNumber
    // }
    if(predicate(selectedNumber)){
      return selectedNumber
    }
  }
}
const myFilter = (collection, predicate) => {
  let newArray = []
  for(let number in collection){
    let selectedNumber = collection[number]
    // console.log("this is predicate:", predicate)
    // console.log(selectedNumber)
    // if (predicate === selectedNumber){
    //   return selectedNumber
    // }
    if(predicate(selectedNumber)){
      newArray.push(selectedNumber)
    }
  }
  return newArray
}

const mySize = (collection) => {
  return Object.keys(collection).length
}

const myFirst = (array, n=1) => {
  let counterStart = 1
  let newArray = []
  for(let number in array){
    if(counterStart <=n){
      newArray.push(array[number])
      counterStart++
    }
  }
//   let firstEl = array[0]
//   let firstElArray = []
//   for(let number in array){
//     if()
//   }
//  return firstEl
  return newArray.length > 1 ? newArray : newArray[0]
}

const myLast = (array, n=1) => {
  let lastEle = array.length -n
  // let na = n
  // let naa = array
  // console.log("na:", na)
  // console.log("naa:", naa)
  // return lastName
  return n >1 ? array.slice(lastEle, array.length) : array[lastEle]
}

const myKeys = (obj) => {
  let newObj = []
  for(let value in obj){
    newObj.push(value)
  }
  return newObj
}

const myValues = (obj) => {
  let newObj = []
  for(let value in obj){
    let objValue = obj[value]
    newObj.push(objValue)
  }
  return newObj
}