function giveJobToStudent(student, jobName) {
  let updatedStudent = { ...student, jobName };
  let fullName = updatedStudent.fullName;
  alert(
    `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`
  );
  return updatedStudent;
}
//тест
const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log(updatedStudent);
