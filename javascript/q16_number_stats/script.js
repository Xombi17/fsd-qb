function calc() {
  let arr = document.getElementById("nums").value.split(",").map(Number);

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sum = 0;
  for (let n of arr)
    sum += n;

  let avg = sum / arr.length;

  document.getElementById("result").innerHTML =
    "Max: " + max +
    "<br>Min: " + min +
    "<br>Avg: " + avg;
}
