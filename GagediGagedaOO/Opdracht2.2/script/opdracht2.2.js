const studenten = [
  { "studentnaam": "Leandro", "studentnummer": "54321" },
  { "studentnaam": "David", "studentnummer": "12345" }
];

const outputDiv = document.getElementById('personen');
let kanker = '';

for (const student of studenten) {
  let tr = document.createElement('tr');
  let tdNaam = document.createElement('td');
  let tdNummer = document.createElement('td');

  tdNaam.textContent = student.studentnaam;
  tdNummer.textContent = student.studentnummer;

  tr.appendChild(tdNaam);
  tr.appendChild(tdNummer);

  kanker += tr.outerHTML;
}

outputDiv.innerHTML = kanker;