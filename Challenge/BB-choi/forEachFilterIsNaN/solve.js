// write your codes
function solution(inputArray) {
    let result = [];

    inputArray.forEach((el) => {
        // if (Number.isFinite(el)) {
        if (typeof el === "number") {
            result.push(el);
        }
    });

    return result;
}

exports.solution = solution;
