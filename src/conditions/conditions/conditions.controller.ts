import {
  Controller,
  Get,
  Delete,
  Post,
  Res,
  Body,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Condition } from '@prisma/client';
import { ConditionDto } from 'src/dto/condition.dto';
import { ConditionsService } from './conditions.service';

@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Get()
  async getAll(): Promise<Condition[]> {
    return this.conditionsService.getAll();
  }

  @Post('/')
  async add(@Res() res, @Body() condition: ConditionDto): Promise<Condition> {
    const newCondition = await this.conditionsService.add(condition);
    if (newCondition) {
      return res.status(HttpStatus.OK).json({
        message: 'Condition added!',
        condition: newCondition,
      });
    } else {
      return res.staus(HttpStatus.FORBIDDEN).json({
        message: 'Condition was not added!',
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deleted = await this.conditionsService.delete(id);
    if (deleted) {
      return res.status(HttpStatus.OK).json({
        message: 'Condition deleted!',
        deleted: deleted,
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Condition was not deleted!',
      });
    }
  }
}
