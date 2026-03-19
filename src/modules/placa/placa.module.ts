import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Placa])],
  controllers: [],
  providers: [],
})
export class PlacaModule {}
