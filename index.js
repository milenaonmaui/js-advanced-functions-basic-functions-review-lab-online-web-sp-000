// Your code here
function saturdayFun (activity = 'roller-skate') {
  return 'This Saturday, I want to '+ activity+"!"
}

function mondayWork (activity = 'go to the office')  {
   return 'This Monday, I will '+ activity +'.'
}

function wrapAdjective(flair = "*"){
  return function(param = 'special'){
    return "You are " + flair +param +flair +"!"
  }
}

car Calculator(){
  this.add = function(v1, v2){
    return v1+v2
  }
  this.subtract = function(){
    return this.value -1
  }
}