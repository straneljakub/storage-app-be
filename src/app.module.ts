import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialsModule } from './materials/materials/materials.module';
import { ConditionsModule } from './conditions/conditions/conditions.module';
import { NotificationsModule } from './notifications/notifications/notifications.module';

@Module({
  imports: [MaterialsModule, ConditionsModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
