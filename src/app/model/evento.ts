import { Ritmo } from './ritmo';
import { Local } from './local';
import { Professor } from './professor';
export class Evento {

  done: boolean;
  title: string;
  description: string;
  $key: string;

  nome = '';
  descricao = '';

 // tipoEvento: TipoEvento;
  local: Local;
  dataInicio: Date;
  horaInicio;

  link: String = '';

  ritmos: Ritmo[];
  professores: Professor[];

}
