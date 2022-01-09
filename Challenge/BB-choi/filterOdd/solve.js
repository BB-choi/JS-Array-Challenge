// write your codes
function solution(inputArray) {
    let answer = [];
    answer = inputArray.filter((el) => el % 2);

    return answer;
}

exports.solution = solution;
