var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array1, additional){
    return [additional, ...array1]
  }
  
  function destructivelyAddElementToBeginningOfArray (array1, additional){
    return array1.unshift(additional)
  }
  
  function addElementToEndOfArray(array1, additional){
    return [...array1, additional]
  }
  
  destructivelyAddElementToEndOfArray(array1, additional){
    return array1.push(additional)
  }
  
  function accessElementInArray(array1, index){
    return array1[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array1){
    return array1.shift()
  }
  
  function removeElementFromBeginningOfArray(array1){
    return array1.slice(1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(array1){
    array1.pop()
    return array1
  }