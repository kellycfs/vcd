import { SelectItem } from 'primeng/api';
import { FileUploadService } from './../../services/file-upload.service';
import { FileUpload } from './../../model/file-upload';
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

  // banner do evento

  ritmos: SelectItem[];

      selectedCars1: string[] = [];

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
    ritmos: new FormControl([]),
    professores: new FormArray([
      // this.initProfessor()
    ])
  });

  constructor(private eventoService: EventoService, private uploadService: FileUploadService) {
    this.ritmos = [
      {label: 'Zouk', value: 'Zouk'},
      {label: 'Samba', value: 'Samba'},
      {label: 'Salsa', value: 'Salsa'},
      {label: 'Kizomba', value: 'Kizomba'},
      {label: 'Bachata', value: 'Bachata'},
      {label: 'Forró', value: 'Forró'},
      {label: 'Bolero', value: 'Bolero'},
      {label: 'West Coast Swing', value: 'West Coast Swing'}
  ];
   }

    ngOnInit() {


    }


  changeBanner(file) {
      this.formEvento.controls.banner = file;
      console.log('Foi emitido o evento e chegou no pai >>>> ',  this.formEvento.controls.banner );
  }

  upload() {

    const file: File =  this.formEvento.controls.banner.value;
    const progress: { percentage: number } = { percentage: 0 };

    console.log("uploading image banner");
    if(file) {
       const currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(currentFileUpload, progress);
    }
  }

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
    this.upload();
    console.log(evento);
  }


  prepareSaveEvento(): Evento {
    const evento = this.formEvento.value;
    console.log(evento);
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
