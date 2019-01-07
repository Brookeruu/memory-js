export function Game(){
  var array = ["1","2","3","4","1","2","3","4"];
  var tiles = [];
  array.forEach(function(each) {
    place = Math.floor(Math.random() * 11);
    if (place <= 5){
      tiles.push(each)
    } else {
      tiles.unshift(each)
    }
  })
}
