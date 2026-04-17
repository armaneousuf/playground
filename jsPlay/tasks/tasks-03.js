// Call a function inside itself. Don't fix it — let it crash. Read the error message. What does it say?

function myself() {
    myself();
};
myself(); // RangeError: Maximum call stack size exceeded