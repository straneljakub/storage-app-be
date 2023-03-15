import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from 'src/features/notifications/notifications.service';
import { NotificationsModule } from 'src/features/notifications/notifications.module';
import { PrismaService } from 'src/features/prisma/prisma.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService],
  imports: [NotificationsModule],
})
export class NotificationsApiModule {}
