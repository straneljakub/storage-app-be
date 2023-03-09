import { Module } from '@nestjs/common';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ConditionsController],
  providers: [ConditionsService, PrismaClient],
})
export class ConditionsModule {}
