let persona = {
  vards: "Jānis",
  vecums: 20,
  irStudents: true,
};
console.log(persona["vards"]);
console.log(persona.vards);

if (persona.vecums >= 18) {
  console.log("Pilngadīgs");
} else {
    console.log("Nepilngadīgs");
}

if (persona.irStudents = true){
    console.log("Persona ir students")
}else{
    console.log("Persona nav studens")
}

persona.course = 'PT2024'
console.log(persona.course);
