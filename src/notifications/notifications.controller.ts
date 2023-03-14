import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateNotificationDto,
  NotificationDto,
} from 'src/notifications/dto/notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getAll(): Promise<NotificationDto[]> {
    return this.notificationsService.getAll();
  }

  @Post('/')
  async add(@Body() notification: CreateNotificationDto) {
    const newNotification = await this.notificationsService.add(notification);
    if (newNotification) {
      return JSON.stringify({
        message: 'Notification added!',
        notification: notification,
      });
    } else {
      throw new NotFoundException('Notification was not added!');
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.notificationsService.delete(id);
    if (deleted) {
      return JSON.stringify({
        message: 'Notification deleted!',
        deleted: deleted,
      });
    } else {
      throw new NotFoundException('Notification was not deleted!');
    }
  }
}
