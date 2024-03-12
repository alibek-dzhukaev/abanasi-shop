import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './resources/categories/categories.module';
import { ManufacturersModule } from './resources/manufacturers/manufacturers.module';
import { ProductsModule } from './resources/products/products.module';
import { PriceChangeModule } from './resources/price-change/price-change.module';
import { StoresModule } from './resources/stores/stores.module';
import { CustomersModule } from './resources/customers/customers.module';
import { PurchasesModule } from './resources/purchases/purchases.module';
import { PurchaseItemsModule } from './resources/purchase-items/purchase-items.module';
import { DeliveriesModule } from './resources/deliveries/deliveries.module';
import typeorm from './config/typeorm';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.get('typeorm');
      },
    }),
    DevtoolsModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          http: configService.get<string>('NODE_ENV') !== 'production',
        };
      },
    }),
    CategoriesModule,
    ManufacturersModule,
    ProductsModule,
    PriceChangeModule,
    StoresModule,
    CustomersModule,
    PurchasesModule,
    PurchaseItemsModule,
    DeliveriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
