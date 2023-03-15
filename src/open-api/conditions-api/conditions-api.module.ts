import { Module } from '@nestjs/common';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from 'src/features/conditions/conditions.service';
import { ConditionsModule } from 'src/features/conditions/conditions.module';
import { PrismaService } from 'src/features/prisma/prisma.service';

@Module({
  controllers: [ConditionsController],
  providers: [ConditionsService, PrismaService],
  imports: [ConditionsModule],
})
export class ConditionsApiModule {}
