var King = function(config){
    this.type = 'king';
    this.constructor(config);
};



King.prototype = new Piece({});

King.prototype.isValidPosition = function(targetPosition) {
      // Convert current position to row and column
      let currentCol = this.position.charAt(0);
      let currentRow = parseInt(this.position.charAt(1));
      
      // Horizontal and vertical distance between the current position and target
      let colDistance = Math.abs(targetPosition.col.charCodeAt(0) - currentCol.charCodeAt(0));
      let rowDistance = Math.abs(targetPosition.row - currentRow);
      
      // Check if the move is a valid King move
      if ((colDistance === 1 && rowDistance === 0) ||  // Horizontal move (left/right)
          (rowDistance === 1 && colDistance === 0) ||  // Vertical move (up/down)
          (colDistance === 1 && rowDistance === 1)) {  // Diagonal move
          return true;
      }
  
      // If none of the above conditions are met, the move is invalid
      console.warn("Invalid move for the King");
      return false;
}

    
    King.prototype.moveTo = function(targetPosition){    
        if(this.isValidPosition(targetPosition)){
            this.position = targetPosition.col + targetPosition.row;
            this.render();
        }else{
            //NOOP
        }
        
    }
