export const averageExams = (valuesExam: number[]) => {
  const numberValidation: boolean = valuesExam.every(exam => typeof exam === 'number')
  if (!numberValidation) throw new Error('please input number')
  
  const sumValues: number = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return sumValues / valuesExam.length
}

export const isStudentPassExam = (valuesExam: number[], name: string) => {
  const minValues: number = 75
  const average: number = averageExams(valuesExam)
  
  if (average > minValues) {
    console.log(`${name} pass the exams`)
    return true
  } else {
    console.log(`${name} fail the exams`)
    return false
  }
  // average > minValues
  //   ? console.log(`${name} pass the exams`)
  //   : console.log(`${name} fail the exams`)
} 