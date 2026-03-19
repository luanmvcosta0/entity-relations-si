import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restricao } from './entities/restricao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restricao])],
  controllers: [],
  providers: [],
})
export class RestricaoModule {}
