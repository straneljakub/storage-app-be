import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [NotificationsService, PrismaService],
  imports: [PrismaModule],
})
export class NotificationsModule {}
