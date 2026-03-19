import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type {
  CategoriaVeiculo,
  CorTarja,
  StatusPlaca,
  UF,
} from '../types/placa.types';

@Entity({ name: 'placas' })
export class Placa {
  @PrimaryGeneratedColumn('uuid', { name: 'id_placa' })
  id_placa: string;

  @Column({ name: 'numero_placa', nullable: false })
  numero_placa: string;

  @Column({ name: 'qr_code', nullable: false })
  qr_code: string;

  @Column({ name: 'uf_registro', length: 2, nullable: false })
  uf_registro: UF;

  @Column({ name: 'municipio_registro', nullable: false })
  municipio_registro: string;

  @Column({ name: 'categoria_veiculo', nullable: false })
  categoria_veiculo: CategoriaVeiculo;

  @Column({ name: 'cor_tarja', nullable: false })
  cor_tarja: CorTarja;

  @Column({ name: 'status_placa', nullable: false })
  status_placa: StatusPlaca;
}
