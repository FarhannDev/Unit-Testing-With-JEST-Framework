import { averageExams, isStudentPassExam } from "./modules/gradeCalculations"

let listValueOfExams = [80, 100, 100, 80];

const average: number = averageExams(listValueOfExams)
console.log({average})

const studentPassExam: boolean = isStudentPassExam(listValueOfExams, 'Budi')
console.log({studentPassExam})

listValueOfExams = [50,40, 70, 80]
const studentFailExam: boolean = isStudentPassExam(listValueOfExams, 'Budi')
console.log({studentFailExam})


