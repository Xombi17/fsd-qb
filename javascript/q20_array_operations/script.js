let arr = [];

function addElement() {
    let val = document.getElementById("inputBox").value;

    arr.push(val);

    document.getElementById("result").innerText = val + " added! Array: [" + arr + "]";
    document.getElementById("inputBox").value = "";
}

function removeElement() {
    let val = document.getElementById("inputBox").value;

    let index = arr.indexOf(val);

    if (index !== -1) {
        arr.splice(index, 1);
        document.getElementById("result").innerText = val + " removed! Array: [" + arr + "]";
    } else {
        document.getElementById("result").innerText = val + " not found in array!";
    }

    document.getElementById("inputBox").value = "";
}

function searchElement() {
    let val = document.getElementById("inputBox").value;

    let index = arr.indexOf(val);

    if (index !== -1) {
        document.getElementById("result").innerText = val + " found at position " + (index + 1) + "!";
    } else {
        document.getElementById("result").innerText = val + " not found in array!";
    }
}

function displayArray() {
    if (arr.length === 0) {
        document.getElementById("result").innerText = "Array is empty!";
    } else {
        document.getElementById("result").innerText = "Array: [" + arr + "]";
    }
}