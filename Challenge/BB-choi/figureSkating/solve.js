// 기본 점수
const baseScore = {
    jump: 10,
    spin: 20,
    step: 15,
};

const baseAssignment = {
    jump: 3,
    spin: 3,
    step: 1,
};

// write your codes

function solution(inputArray) {
    // TES = GOE + 기본점수
    // SCORE = TES + PCS - 감점

    function chkBaseAssignment(person) {
        const curGOE = person.goe;
        if (curGOE.jump.length < baseAssignment.jump) return false;
        if (curGOE.spin.length < baseAssignment.spin) return false;
        if (curGOE.step.length < baseAssignment.step) return false;
        return true;
    }

    function leaveMaxThreeEl(arr) {
        if (arr.length > 3) {
            arr.sort((a, b) => b - a);
            return arr.slice(0, 3);
        }
        return arr;
    }

    return inputArray
        .map((el) => {
            if (chkBaseAssignment(el)) {
                const jump = leaveMaxThreeEl(el.goe.jump);
                const spin = leaveMaxThreeEl(el.goe.spin);
                const step = leaveMaxThreeEl(el.goe.step);

                const tes =
                    jump.reduce((acc, cur) => acc + cur * baseScore.jump, 0) +
                    spin.reduce((acc, cur) => acc + cur * baseScore.spin, 0) +
                    step.reduce((acc, cur) => acc + cur * baseScore.step, 0);
                const score = tes + el.pcs - el.penalty;

                return { name: el.name, score: score };
            }
        })
        .sort((a, b) => b.score - a.score)
        .filter((el) => Boolean(el));
}

exports.solution = solution;
