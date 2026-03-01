function checkPalindrome() {
  let word = document.getElementById("inputString").value;

  let reversedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
  }

  if (word === reversedWord) {
    document.getElementById("result").innerText = word + " is a Palindrome ";
  } else {
    document.getElementById("result").innerText =
      word + " is NOT a Palindrome ";
  }
}
    