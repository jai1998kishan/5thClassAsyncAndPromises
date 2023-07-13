function delayPrint(letter, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(letter);
        resolve();
      }, delay);
    });
  }
  
  async function printSequence() {
    try{
        await delayPrint('a', 1000);
        await delayPrint('b', 1000);
        await delayPrint('c', 1000);
        await delayPrint('d', 1000);
        await delayPrint('e', 1000);
    }catch(err){
        console.log(err);
    } 
  }
  
  printSequence();
  