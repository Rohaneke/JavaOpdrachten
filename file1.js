
let voorNaam = "Rohan";
let achterNaam = "Dormolen";
let leeftijd = 18;
let opleidingeiding = "Software Developer";

function groet(voorNaam, an) {
  console.log(`Hallo mijn naam is ${voorNaam} ${achterNaam}`);
}

function info(voorNaam, an, lft, opleiding) {
  console.log(`${voorNaam} ${an} is ${lft} jaar oud en volgt de opleiding ${opleiding}.`);
}

groet(voorNaam, achterNaam);
info(voorNaam, achterNaam, leeftijd, opleidingeiding);

const student = {
  voorNaam: "Rohan",
  achterNaam: "Dormolen",
  leeftijd: 18,
  opleiding: "Software Developer",
  groet() {
    console.log(`Hallo mijn naam is ${this.voorNaam} ${this.achterNaam}`);
  },
  toonInfo() {
    console.log(`${this.voorNaam} ${this.achterNaam} is ${this.leeftijd} jaar en volgt ${this.opleiding}.`);
  }
};

student.groet();
student.toonInfo();