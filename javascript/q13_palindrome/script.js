function check() {
  let word = document.getElementById("text").value;
  let reversed = word.split("").reverse().join("");

  if (word === reversed)
    document.getElementById("result").innerHTML = "Palindrome";
  else
    document.getElementById("result").innerHTML = "Not Palindrome";
}
