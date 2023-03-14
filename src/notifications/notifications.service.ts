import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { NotificationDto } from 'src/notifications/dto/notification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  async add(notification: NotificationDto): Promise<Notification> {
    const newNotification = this.prisma.notification.create({
      data: notification,
    });
    return newNotification;
  }

  async delete(id: number): Promise<Notification> {
    const deleted = this.prisma.notification.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
