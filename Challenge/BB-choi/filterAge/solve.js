// write your codes
function solution(inputArray) {
    let answer = [];
    answer = inputArray.filter((obj) => obj.age >= 30 && obj.age < 50);

    return answer;
}

exports.solution = solution;
