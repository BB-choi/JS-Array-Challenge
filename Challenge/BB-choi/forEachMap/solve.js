// write your codes
function solution(inputArray) {
    let result = [];
    inputArray.forEach((el) => result.push(el + "%"));
    return result;
}

console.log(solution([100, 10, 20, 40]));

exports.solution = solution;
