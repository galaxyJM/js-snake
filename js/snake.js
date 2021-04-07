function Snake()
{
    this.body = [
        {'row': 3, 'col': 6},
        {'row': 3, 'col': 5},
        {'row': 3, 'col': 4},
        {'row': 3, 'col': 3}
    ]  
    this.direction = "R"
}


Snake.prototype.update = function()
{
    //蛇的不同方向移动
    switch(this.direction){
        case "R": this.body.unshift({'row': this.body[0].row, 'col': this.body[0].col+1});break; 
        case "D": this.body.unshift({'row': this.body[0].row+1, 'col': this.body[0].col});break;
        case "U": this.body.unshift({'row': this.body[0].row-1, 'col': this.body[0].col});break;
        case "L": this.body.unshift({'row': this.body[0].row, 'col': this.body[0].col-1});break;
    }
    this.body.pop()
    
}


Snake.prototype.render = function()
{
    
    for(let i=0;i<this.body.length;i++)
    {
        game.setColor(this.body[i].row,this.body[i].col,'black')
    }
}