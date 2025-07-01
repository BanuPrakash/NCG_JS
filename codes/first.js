console.log("Hello!!!");
function execute() {
    setTimeout(function doTask() {
        // setInterval(function doTask() {
        console.log("Timed 1!!!");
    }, 0);
}
execute();
setTimeout(function doTask2() {
    // setInterval(function doTask() {
    console.log("Timed 2!!!");
}, 0);

Promise.resolve().then(function done1() {
    console.log("P1");
})
Promise.resolve().then(function done2() {
    console.log("P2");
})

console.log("Bye!!!");