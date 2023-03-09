import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Notification } from '@prisma/client';
import { NotificationDto } from 'src/dto/notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getAll(): Promise<Notification[]> {
    return this.notificationsService.getAll();
  }

  @Post('/')
  async add(@Res() res, @Body() notification: NotificationDto) {
    const newNotification = await this.notificationsService.add(notification);
    if (newNotification) {
      return res.status(HttpStatus.OK).json({
        message: 'Notification added!',
        notification: notification,
      });
    } else {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Notification not added!',
      });
    }
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deleted = await this.notificationsService.delete(id);
    if (deleted) {
      return res.status(HttpStatus.OK).json({
        message: 'Notification deleted!',
        deleted: deleted,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Notification not deleted!',
      });
    }
  }
}
