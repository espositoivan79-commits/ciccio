let listaStudenti = [];
class StudenteServices {
    addStudent(student) {
        listaStudenti.push(student);
        console.log(`Studente ${student.name} aggiunto con successo!`);
    }
    removeStudent(student) {
        listaStudenti = listaStudenti.filter((s) => s.id !== student.id);
        console.log(`Studente ${student.name} rimosso con successo!`);
    }
    calcolaMedia(student) {
        const media = student.voti.reduce((acc, curr) => acc + curr, 0) / student.voti.length;
        return media;
    }
    listaStudentiAttivi() {
        return listaStudenti.filter((a) => a.isActive == true);
    }
    isPromosso(student) {
        const media = this.calcolaMedia(student);
        return media > 6;
    }
}
const classe = new StudenteServices();
const s1 = {
    id: "1",
    name: "A",
    isActive: false,
    voti: [4,6,8,9,10]
};
const s2 = {
    id: "2",
    name: "B",
    isActive: true,
    voti: [4,6,8,7,6]
}

classe.addStudent(s1);
classe.addStudent(s2);
console.log(classe.calcolaMedia(s1));
classe.removeStudent(s1);
console.log(classe.listaStudentiAttivi());
console.log(classe.isPromosso);
export {};
//# sourceMappingURL=primoprogettotypescript.js.map