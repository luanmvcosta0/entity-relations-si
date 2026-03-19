import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proprietario } from './entities/proprietario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proprietario])],
  controllers: [],
  providers: [],
})
export class ProprietarioModule {}
