import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debito } from './entities/debito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Debito])],
  controllers: [],
  providers: [],
})
export class DebitoModule {}
