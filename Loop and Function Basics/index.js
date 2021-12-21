function PatternMaker(n) {
  let Output = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n - i; k++) {
      Output += "*";
    }
    Output += "\n";
  }
  console.log(Output);
}
PatternMaker(7);
