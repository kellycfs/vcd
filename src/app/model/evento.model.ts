


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


  local: Local;
  dataInicio: Date;
  dataFim: Date;
  horaInicio = '';
  horaFim = '';

  link: String = '';

  ritmos: Ritmo[];
  professores: Professor[];

  banner: String = '';

}
