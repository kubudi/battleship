$('document').ready(function(){

  init(40); 

  $('#clear').on('click', function(){
    clear();
  })
});
  
var init = function(size){
  var $board = $('.board');
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var $visualNode = $("<div class='node'></div>")
      $visualNode.offset({ top: i*size, left: j*size})
      $board.append($visualNode);
      var node = new Node(i*size,j*size,$visualNode)
      board[i][j] = node;
    };
  };
}

//Node constructor
function Node(x, y, $node){
  var self = this;
  self.x = x;
  self.y = y;
  self.$node = $node;
  self.isfill = false;
  self.fill = function(){
    self.$node.removeClass("empty");
    self.$node.addClass("fill");
    self.isfill = true;
  };
  self.empty = function(){
    self.$node.removeClass("fill");
    self.$node.addClass("empty");
    self.isfill = false;
  };
  self.$node.on('click', function() {
     console.log("Coordinates are:"+self.x+","+self.y);
     if(self.isfill){
      self.empty();
     } else {
      self.fill();
     }
  });
};

//Default board initialization
var board = new Array(10);
for (var i = 0; i < board.length; i++) {
  board[i] = new Array(10);
};

var clear = function(){
  var $node = $('.node');
  $node.removeClass("fill");
  $node.addClass("empty");

  //TODO: board da temizlenecek
}


