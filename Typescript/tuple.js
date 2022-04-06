var a = [1, "one", 2, "two"];
console.log(a);
a.push(3, "three", 4);
console.log(a);
a.pop();
console.log(a);
function display(tuple_values) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
display(a);
