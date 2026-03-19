import { Entity } from 'typeorm';

@Entity({ name: 'veiculos' })
export class Veiculo {
  renavam: number;
  chassi: string;
  marca: string;
  modelo: string;
  versao: string;
  ano_fabricacao: string;
  ano_modelo: number;
  cor_predominante: string;
  capacidade_passageiros: number;
  peso_bruto_total: number;
}
