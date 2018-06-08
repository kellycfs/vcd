import { Evento } from './../../model/evento';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {


  formEvento = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl(),
    local: new FormGroup({
      nome: new FormControl(),
      endereco: new FormGroup({
        logradouro: new FormControl(),
        complemento: new FormControl(),
        bairro: new FormControl(),
        cidade: new FormControl(),
        estado: new FormControl(),
        cep: new FormControl(),
      })
    }),
    dataInicio: new FormControl(),
    horaInicio: new FormControl(),
    link: new FormControl(),
    banner: new FormControl(),
    ritmos: new FormArray([
      this.initRitmo()
    ]),
    professores: new FormArray([
      this.initProfessor()
    ])
  });

  initRitmo() {

    return new FormGroup({
      nome: new FormControl()
    });
  }

  initProfessor() {

    return new FormGroup({
      nome: new FormControl()
    });
  }

  addProfessor() {
    // add address to the list
    const control = <FormArray>this.formEvento.controls['professores'];
    control.push(this.initProfessor());
  }

  addRitmo() {
    // add address to the list
    const control = <FormArray>this.formEvento.controls['ritmos'];
    control.push(this.initRitmo());
  }


  removeProfessor(i: number) {
    // remove address from the list
    const control = <FormArray>this.formEvento.controls['professores'];
    control.removeAt(i);
  }

  constructor() { }

  ngOnInit() {
  }

  save(evento: Evento) {
    // call API to save
    // ...
    console.log(evento);
}


prepareSaveEvento(): Evento {
  const formModel = this.formEvento.value;

  // deep copy of form model lairs
  const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
    (address: Address) => Object.assign({}, address)
  );

  // return new `Hero` object containing a combination of original hero value(s)
  // and deep copies of changed form model values
  const saveHero: Hero = {
    id: this.hero.id,
    name: formModel.name as string,
    // addresses: formModel.secretLairs // <-- bad!
    addresses: secretLairsDeepCopy
  };
  return saveHero;
}

}
