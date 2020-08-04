class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      console.log(this.body.speed);
     
      if(this.body.speed<10){
      
      rectMode(CENTER);
      
      fill("lightblue");
      rect(pos.x, pos.y, this.width, this.height);
    }
    
    else{
      
      score = score+1;
      World.remove(world,this.body);
      push ();
      this.visibility = this.visibility-10;
      
      pop ();
    }
    }
    }
  
  