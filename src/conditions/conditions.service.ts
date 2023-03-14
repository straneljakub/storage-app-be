import { Injectable } from '@nestjs/common';
import { Condition } from '@prisma/client';
import { ConditionDto } from 'src/conditions/dto/condition.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConditionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Condition[]> {
    return this.prisma.condition.findMany();
  }

  async add(condition: ConditionDto): Promise<Condition> {
    const newCondition = await this.prisma.condition.create({
      data: condition,
    });
    return newCondition;
  }

  async delete(id: number): Promise<Condition> {
    const deleted = this.prisma.condition.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
