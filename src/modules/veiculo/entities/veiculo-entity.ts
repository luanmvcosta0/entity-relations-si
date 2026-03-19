import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
