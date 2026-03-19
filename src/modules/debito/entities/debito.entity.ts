import { Veiculo } from 'src/modules/veiculo/entities/veiculo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'debito' })
export class Debito {
  @PrimaryGeneratedColumn('uuid', { name: 'id_debito' })
  id_debito: string;

  @Column({ name: 'tipo_debito', nullable: false })
  tipo_debito: string;

  @Column({ name: 'valor', type: 'decimal', nullable: false })
  valor: number;

  @Column({ name: 'data_vencimento', type: 'date', nullable: false })
  data_vencimento: Date;

  @Column({ name: 'status_pagamento', nullable: false })
  status_pagamento: string;

  @ManyToOne(() => Veiculo, (veiculo) => veiculo.debitos)
  @JoinColumn({ name: 'renavam' })
  veiculo: Veiculo;
}
