import { Injectable } from '@nestjs/common';
import {
  CreateNotificationDto,
  NotificationDto,
} from 'src/notifications/dto/notification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<NotificationDto[]> {
    const notifications = await this.prisma.notification.findMany();
    return notifications.map(
      (notification) => new NotificationDto(notification),
    );
  }

  async add(notification: CreateNotificationDto): Promise<NotificationDto> {
    const newNotification = await this.prisma.notification.create({
      data: notification,
    });
    return new NotificationDto(newNotification);
  }

  async delete(id: number): Promise<NotificationDto> {
    const deleted = await this.prisma.notification.delete({
      where: {
        id: id,
      },
    });
    return new NotificationDto(deleted);
  }
}
