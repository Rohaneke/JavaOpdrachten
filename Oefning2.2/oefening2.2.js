const studenten = [
  { "studentnaam": "Leandro", "studentnummer": "54321" },
  { "studentnaam": "David", "studentnummer": "12345" }
];

const outputDiv = document.getElementById('output');
let html = '';

for (const student of studenten) {
  html += `Student Naam: ${student.studentnaam}<br>`;
  html += `Student Nummer: ${student.studentnummer}<br><br>`;
}

outputDiv.innerHTML = html;