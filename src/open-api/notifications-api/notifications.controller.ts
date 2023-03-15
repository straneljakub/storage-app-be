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
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationDto } from './dto/notification.dto';
import { NotificationsService } from 'src/features/notifications/notifications.service';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiResponse({
    description: 'All notifications',
    type: [NotificationDto],
  })
  @Get()
  async getAll(): Promise<NotificationDto[]> {
    return this.notificationsService.getAll();
  }

  @ApiCreatedResponse({
    description: 'Created Notification',
    type: NotificationDto,
  })
  @ApiNotFoundResponse({
    description: 'Notification was not added!',
  })
  @Post('/')
  async add(@Body() notification: CreateNotificationDto) {
    const newNotification = await this.notificationsService.add(notification);
    if (newNotification) {
      return newNotification;
    } else {
      throw new NotFoundException('Notification was not added!');
    }
  }

  @ApiOkResponse({
    description: 'Deleted Notification',
    type: NotificationDto,
  })
  @ApiNotFoundResponse({
    description: 'Notification was not deleted!',
  })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.notificationsService.delete(id);
    if (deleted) {
      return deleted;
    } else {
      throw new NotFoundException('Notification was not deleted!');
    }
  }
}
