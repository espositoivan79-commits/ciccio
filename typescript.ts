interface Studente{
  id: string;
  name: string;
  isActive: boolean;
  voti: number[];
}

let listaStudenti : Studente[] =[]
class StudenteServices {
  addStudent(student: Studente):void{
    listaStudenti.push(student);
    console.log(`Studente ${student.name} aggiunto con successo!`);
  }
  removeStudent(student: Studente): void {
  listaStudenti = listaStudenti.filter(
    (s: Studente): boolean => s.id !== student.id
  );
  console.log(`Studente ${student.name} rimosso con successo!`);
}
  calcolaMedia(student:Studente):number{
    const media = student.voti.reduce((acc, curr) => acc + curr, 0) / student.voti.length;
    return media;
  }
  listaStudentiAttivi():Studente[]{
    return listaStudenti.filter((a:Studente):boolean=> a.isActive == true);
  }
  isPromosso(student: Studente): boolean {      
    const media = this.calcolaMedia(student);
    return media > 6;
    }
}

const classe = new StudenteServices();

const s1: Studente = {
  id: "1",
  name: "A",
  isActive: false,
  voti: [4,6,8]
}

const s2: Studente = {
  id: "2",
  name: "B",
  isActive: true,
  voti: [4,6,8]
}

classe.addStudent(s1);
classe.addStudent(s2);
console.log(classe.calcolaMedia(s1));
classe.removeStudent(s1);
console.log(classe.listaStudentiAttivi());
console.log(classe.isPromosso);
