import { Veiculo } from 'src/modules/veiculo/entities/veiculo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'restricao' })
export class Restricao {
  @PrimaryGeneratedColumn('uuid', { name: 'id_restricao' })
  id_restricao: string;

  @Column({ name: 'tipo_restricao', nullable: false })
  tipo_restricao: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @Column({ name: 'data_registro', type: 'timestamp', nullable: false })
  data_registro: Date;

  @ManyToOne(() => Veiculo, (veiculo) => veiculo.restricoes)
  @JoinColumn({ name: 'renavam' })
  veiculo: Veiculo;
}
