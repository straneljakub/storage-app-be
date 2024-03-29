import { Injectable } from '@nestjs/common';
import { CreateConditionDto } from '../../open-api/conditions-api/dto/create-condition.dto';
import { ConditionDto } from '../../open-api/conditions-api/dto/condition.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConditionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<ConditionDto[]> {
    const conditions = await this.prisma.condition.findMany();
    return conditions.map((condition) => new ConditionDto(condition));
  }

  async add(condition: CreateConditionDto): Promise<ConditionDto> {
    const newCondition = await this.prisma.condition.create({
      data: condition,
    });
    return new ConditionDto(newCondition);
  }

  async delete(id: number): Promise<ConditionDto> {
    const deleted = await this.prisma.condition.delete({
      where: {
        id: id,
      },
    });
    return new ConditionDto(deleted);
  }
}
