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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Conditions')
@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @ApiResponse({
    description: 'All conditions',
    type: [ConditionDto],
  })
  @Get()
  async getAll(): Promise<ConditionDto[]> {
    return this.conditionsService.getAll();
  }

  @ApiCreatedResponse({
    description: 'Created Condition',
    type: ConditionDto,
  })
  @ApiNotFoundResponse({
    description: 'Condition was not added!',
  })
  @Post('/')
  async add(@Body() condition: CreateConditionDto) {
    const newCondition = await this.conditionsService.add(condition);
    if (newCondition) {
      return newCondition;
    } else {
      throw new NotFoundException('Condition was not added!');
    }
  }

  @ApiOkResponse({
    description: 'Deleted Condition',
    type: ConditionDto,
  })
  @ApiNotFoundResponse({
    description: 'Condition was not deleted!',
  })
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.conditionsService.delete(id);
    if (deleted) {
      return deleted;
    } else {
      throw new NotFoundException('Condition was not deleted!');
    }
  }
}
