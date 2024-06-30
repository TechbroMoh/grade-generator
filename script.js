const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

rl.question("Enter the student's marks (0-100): ", (input) => {
    const marks = parseInt(input);
    const grade = getGrade(marks);
    console.log(`The grade is: ${grade}`);
    rl.close();
});
