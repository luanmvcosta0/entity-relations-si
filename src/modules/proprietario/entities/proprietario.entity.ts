import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TipoProprietario } from '../enum/enums';
import type { UF } from 'src/modules/shared/types/uf.type';
import { Veiculo } from 'src/modules/veiculo/entities/veiculo.entity';

@Entity({ name: 'proprietarios' })
export class Proprietario {
  @PrimaryGeneratedColumn('uuid', { name: 'id_proprietario' })
  id_proprietario: string;

  @Column({ name: 'nome_proprietario', nullable: false })
  nome_proprietario: string;

  @Column({ name: 'tipo_proprietario', type: 'enum', nullable: false })
  tipo_proprietario: TipoProprietario;

  @Column({ name: 'cpf_cnpj', nullable: false })
  cpf_cnpj: string;

  @Column({ name: 'data_nascimento', type: 'date', nullable: true })
  data_nascimento: Date;

  @Column({ name: 'representante_legal', nullable: true })
  representante_legal: string;

  @Column({ name: 'endereco', nullable: false })
  endereco: string;

  @Column({ name: 'municipio', nullable: false })
  municipio: string;

  @Column({ name: 'uf', length: 2, nullable: false })
  uf: UF;

  @OneToMany(() => Veiculo, (veiculo) => veiculo.proprietario)
  veiculos: Veiculo[];
}
