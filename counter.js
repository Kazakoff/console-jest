module.exports = function createCounter(initial) {
    var counter = initial;
    function increment(value) {
        if (!isFinite(value) || value < 1) {
            value = 1;
        }
 counter += value;
    }
    function get() {
        return counter;
    }
    return {
        increment: increment,
        get: get
    };
}