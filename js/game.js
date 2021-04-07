function Game()
{
     this.row = 20; //行数
     this.col = 20; //列数
     this.init()
     this.snake = new Snake() //实例化一条蛇
     
     this.start()
     this.bindEvent()
     
}



Game.prototype.init = function()
{
    
    this.tab = document.createElement("table")
    
    var tr,td
    for(var i=0;i<this.row;i++){
        tr = document.createElement('tr')
        this.tab.appendChild(tr)
        for(var j=0;j<this.col;j++)
        {
            td = document.createElement('td')
            tr.appendChild(td)
        }
    }
    
    document.getElementById('app').appendChild(this.tab)
}

Game.prototype.setColor = function(row,col,color)
{
    this.tab.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.backgroundColor = color
}

Game.prototype.clear = function()
{
    for(let i=0;i<this.row;i++)
    {
        for(let j=0;j<this.col;j++)
        {
            
            this.tab.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.backgroundColor = 'white'
        }
    }
   
   
}
//键盘事件监听

Game.prototype.bindEvent = function()
{
    var a = this
    document.onkeydown = function(e)
    {
       
        switch(e.key) 
       {
           case "ArrowLeft" : { a.snake.direction = 'L';break;}
           case "ArrowRight" : {a.snake.direction = "R";break;}
           case "ArrowUp" : {a.snake.direction = "U";break;}
           case "ArrowDown" : {a.snake.direction = "D";break;}
       }
    }

}

Game.prototype.start = function()
{
    
    this.timer = setInterval(() => {
    
        game.clear() //每一帧先清屏 使得整个表格为白色
        game.snake.update() //更新蛇的状态 删除尾巴 添加头部
        console.log(game.snake.direction)
        game.snake.render() //重新渲染蛇的身体颜色
        //异步的调用render方法 
        //即首先跳过该方法,先执行其它函数定时时间结束后再转回执行定时器内的函数
       
    }, 1000);
}



