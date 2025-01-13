# FA205_workshop1
Creative Computing FA205 Workshop Task 1
Workshop 1: Coding Fundamentals   

For this worksop I decided to refamiliarise myself with class structures in java (https://p5js.org/reference/p5/class/)   
I made a duck class that makes the construction on many ducks much more efficient!!!    
This means im able to animate the ducks in multiple ways with minimal code!   

My duck class contains a constructor with all the key elements that make up my duck (global variables that need to be changed outside of the specific functions *i.e. x and y position, colour, etc.* things that need to remain constant for my duck to have a comprehensible existence.)    
I have added the variables t and u to act as the x and y gradient for the movement of my ducks.   

Because I am making a duck class I can make fun specialised functions for them! 
show() allows me to draw a duck with ease   
// I put all my code for circles into this function and thanks to my consisten x variable for positioning it my duck can move anywhere I tell it to!   
// I standardised all the sizes of the elipses and circles in relation to the size of the head circle, i called this variable l, combined with loacalising all my sizes around value x i am able to make a duck any size i want! (this will be helpful in the future)   

move() allows me to move my duck with ease
// I have randomised the gradient of each ducks movement allowing for a different viewing experience upon each viewing.
// I have made the ducks rebound off the walls of the sketch (i did this by multiplying the t or u variable by -1) by reversing the direction of travel once x got to the edges of the sketch)
// i.e. if (this.x > width || this.x < 0){...};  if ((this.y > height || this.y < 0)){...}

colour() makes the ducks change colour given some criteria i established with if statements.
I used the random() fucntion to change the ducks colour (I changed the colour of the bill in relation to the random colour of the body to optimise contrast as best I could.
// the criteria I decided to use were when the duck collides with the edges of the sketch    
// the criteria of which i already used for movement so this was a very easy function to make) but because the colour changes indiscriminanty of wether is the x or y limit that the duck reaches i can use a boolean statement to get rid of unnecessary code. Using || (OR) instead of two seperate if statements!
// i.e. if ((this.x > width || this.x < 0) || (this.y > height || this.y < 0)){...}

I am very hapy with the frame work I have been able to make for my duck, and I look forward to making more for the next workshop!
