//import { TIPOEVENTO } from './evento';


import { Ritmo } from './ritmo';
import { Local } from './local';
import { Professor } from './professor';

const TIPOEVENTO = ['CONGRESSO', 'AULA', 'BAILE', 'WORKSHOP', 'PRATICA'];
export class Evento {

  done: boolean;
  title: string;
  description: string;
  $key: string;

  nome = '';
  descricao = '';

  //tipoEvento: TIPOEVENTO;
  local: Local;
  dataInicio: Date;
  horaInicio = '';

  link: String = '';

  ritmos: Ritmo[];
  professores: Professor[];

  banner: String = '';

}
