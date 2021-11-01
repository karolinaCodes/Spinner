//spinner 1 refactored
const symbolArray = ["|", "/", "-", "\\"];

let timer = 100;

// 1500 makes the spinner rotate 360 twice
while (timer < 1500) {
  //loop through symbol array
  for (let j = 0; j < symbolArray.length; j++) {
    setTimeout(() => {
      process.stdout.write(`\r${symbolArray[j]}   `);
    }, (timer += 200));
  }
}
