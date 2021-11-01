//spinner 1 refactored
const symbolArray = ["|", "/", "-", "\\"];

const timer = 100;

//outer loop makes the spinner spin around twice
for (let i = 0; i <= 2; i++) {
  //inner loop loops through symbol array outputs at respective intervals and increases the delay by 200 each time
  for (let i = 0; i < symbolArray.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${symbolArray[i]}   `);
    }, timer + i * 200);
  }
}
