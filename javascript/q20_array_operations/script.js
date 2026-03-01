let arr = [];

function showArray() {
    document.getElementById("out").textContent = "Array: [" + arr.join(", ") + "]";
}

function startMenu() {
    while (true) {
        let choice = prompt(
            "Array Menu\n1. Add element\n2. Remove element\n3. Search element\n4. Display array\n5. Exit\nEnter choice:"
        );

        if (choice === "1") {
            let value = prompt("Enter element to add:");
            if (value !== null && value !== "") {
                arr.push(value);
                alert("Added");
            }
        } else if (choice === "2") {
            let value = prompt("Enter element to remove:");
            let index = -1;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    index = i;
                    break;
                }
            }

            if (index !== -1) {
                arr.splice(index, 1);
                alert("Removed");
            } else {
                alert("Element not found");
            }
        } else if (choice === "3") {
            let value = prompt("Enter element to search:");
            let found = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    found = true;
                    break;
                }
            }

            if (found) {
                alert("Element found");
            } else {
                alert("Element not found");
            }
        } else if (choice === "4") {
            alert("Array: [" + arr.join(", ") + "]");
        } else if (choice === "5" || choice === null) {
            break;
        } else {
            alert("Invalid choice");
        }
    }

    showArray();
}
