import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TipoProprietario } from '../enum/enums';

@Entity({ name: 'proprietarios' })
export class Proprietario {
  @PrimaryGeneratedColumn('uuid', { name: 'id_proprietario' })
  id_proprietario: string;

  @Column({ name: 'nome_proprietario', nullable: false })
  nome_proprietario: string;

  @Column({ name: 'tipo_proprietario', type: 'enum', nullable: false })
  tipo_proprietario: TipoProprietario;
}
