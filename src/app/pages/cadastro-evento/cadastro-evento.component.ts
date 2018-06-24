import { EventoService } from './../../services/evento.service';
import { Evento } from './../../model/evento';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  submitted = false;

  formEvento = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    local: new FormGroup({
      nome: new FormControl('', Validators.required),
      endereco: new FormGroup({
        logradouro: new FormControl(),
        complemento: new FormControl(),
        bairro: new FormControl(),
        cidade: new FormControl(),
        estado: new FormControl(),
        cep: new FormControl(),
      })
    }),
    dataInicio: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    link: new FormControl(),
    banner: new FormControl(),
    ritmos: new FormArray([
      // this.initRitmo()
    ]),
    professores: new FormArray([
      // this.initProfessor()
    ])
  });

  // convenience getter for easy access to form fields
  get f() { return this.formEvento.controls; }

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

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
  }

  save() {
    const evento = this.prepareSaveEvento();
    this.submitted = true;

    // stop here if form is invalid
    if (this.formEvento.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');
    // call API to save
    this.eventoService.save(evento);
    console.log(evento);
  }


  prepareSaveEvento(): Evento {
    const evento = this.formEvento.value;

    /*// deep copy of form model lairs
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
    */
    return evento;
  }

}
