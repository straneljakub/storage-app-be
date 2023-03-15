import {
  Controller,
  Get,
  Delete,
  Post,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

import { ConditionDto } from './dto/condition.dto';
import { CreateConditionDto } from './dto/create-condition.dto';
import { ConditionsService } from 'src/features/conditions/conditions.service';

@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Get()
  async getAll(): Promise<ConditionDto[]> {
    return this.conditionsService.getAll();
  }

  @Post('/')
  async add(@Body() condition: CreateConditionDto) {
    const newCondition = await this.conditionsService.add(condition);
    if (newCondition) {
      return JSON.stringify({
        message: 'Condition added!',
        condition: newCondition,
      });
    } else {
      throw new NotFoundException('Condition was not added!');
    }
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.conditionsService.delete(id);
    if (deleted) {
      return JSON.stringify({
        message: 'Condition deleted!',
        deleted: deleted,
      });
    } else {
      throw new NotFoundException('Condition was not deleted!');
    }
  }
}
