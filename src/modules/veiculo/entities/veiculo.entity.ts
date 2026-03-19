import { Debito } from 'src/modules/debito/entities/debito.entity';
import { Placa } from 'src/modules/placa/entities/placa.entity';
import { Proprietario } from 'src/modules/proprietario/entities/proprietario.entity';
import { Restricao } from 'src/modules/restricao/entities/restricao.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'veiculos' })
export class Veiculo {
  @PrimaryGeneratedColumn({ name: 'renavam', type: 'integer' })
  renavam: number;

  @Column({
    name: 'chassi',
    type: 'string',
    length: 17,
    nullable: false,
    unique: true,
  })
  chassi: string;

  @Column({ name: 'marca', nullable: false })
  marca: string;

  @Column({ name: 'modelo', nullable: false })
  modelo: string;

  @Column({ name: 'versao', nullable: false })
  versao: string;

  @Column({ name: 'ano_fabricacao', nullable: false })
  ano_fabricacao: string;

  @Column({ name: 'ano_modelo', type: 'integer', nullable: false })
  ano_modelo: number;

  @Column({ name: 'cor_predominante', nullable: false })
  cor_predominante: string;

  @Column({ name: 'capacidade_passageiros', type: 'integer', nullable: false })
  capacidade_passageiros: number;

  @Column({ name: 'peso_bruto_total', type: 'decimal', nullable: true })
  peso_bruto_total: number;

  @OneToOne(() => Placa)
  @JoinColumn({ name: 'id_placa' })
  placa: Placa;

  @OneToMany(() => Debito, (debito) => debito.veiculo)
  debitos: Debito[];

  @OneToMany(() => Restricao, (restricao) => restricao.veiculo)
  restricoes: Restricao[];

  @ManyToOne(() => Proprietario, (proprietario) => proprietario.veiculos)
  @JoinColumn({ name: 'id_proprietario' })
  proprietario: Proprietario;
}
