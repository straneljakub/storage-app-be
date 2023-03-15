import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsApiModule } from './open-api/notifications-api/notifications-api.module';
import { MaterialsApiModule } from './open-api/materials-api/materials-api.module';
import { ConditionsApiModule } from './open-api/conditions-api/conditions-api.module';

@Module({
  imports: [MaterialsApiModule, ConditionsApiModule, NotificationsApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
