function giveTalonsInOrder(patients, orders) {
  let sortedPatients = [];
  for (let orderId of orders) {
    let patient = patients.find((p) => p.id === orderId);
    if (patient) {
      sortedPatients.push(patient);
    }
  }
  return sortedPatients;
}
const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];
console.log(giveTalonsInOrder(people, ordersArr));
