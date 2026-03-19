import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebitoModule } from './modules/debito/debito.module';
import { PlacaModule } from './modules/placa/placa.module';
import { ProprietarioModule } from './modules/proprietario/proprietario.module';
import { RestricaoModule } from './modules/restricao/restricao.module';
import { VeiculoModule } from './modules/veiculo/veiculo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    VeiculoModule,
    PlacaModule,
    ProprietarioModule,
    DebitoModule,
    RestricaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
