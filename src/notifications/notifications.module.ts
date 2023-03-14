import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService],
  imports: [PrismaModule],
})
export class NotificationsModule {}
