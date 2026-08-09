/*
  Problem: Assignment Life (Closures)
  
  Real-life scenario: On Programming Hero, every student gets 3 LIVES. Each time you submit an assignment LATE for 60 marks,
  you lose 1 life.When lives hit 0, you can't submit late assignment for 60 marks. You want ONE function that can create
  a fresh,independent life-counter.

  createLifeCounter() — returns a function. Every time you call that returned function (on a late submission), 
  it decreases a PRIVATE lives count by 1 and returns the remaining lives. There is NO global variable storing lives — 
  it lives only inside the closure.

  Input:
    const rahimLives = createLifeCounter();
    rahimLives(); // late submission
    rahimLives(); // late submission

  Output:
    2
    1

*/

const LifeCounter=() =>{
  let lives=3;

  let remainingLives=()=>{
      if(lives>0){
        lives--;
      }
      // console.log(lives); //2  //1
      return lives;
  }
  // console.log(remainingLives); //[Function: remainingLives]
  return remainingLives;
  
}

const rahimLives = LifeCounter();
console.log("rahim :",rahimLives());// late submission = life remains =2
console.log("rahim :",rahimLives()); // late submission =life remains =1
console.log("rahim :",rahimLives()); // late submission=life remains =0
console.log("rahim :",rahimLives()); // late submission=life remains =0
console.log(); //new line


const karimLives = LifeCounter();
console.log("Kahim :",karimLives());// late submission =life remains =2
console.log("Kahim :",karimLives()); // late submission =life remains =1
console.log("Kahim :",karimLives()); // late submission=life remains =0
console.log();

const javedLives = LifeCounter();
console.log("Javed :",javedLives());