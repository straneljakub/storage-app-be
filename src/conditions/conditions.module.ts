import { Module } from '@nestjs/common';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ConditionsController],
  providers: [ConditionsService, PrismaService],
  imports: [PrismaModule],
})
export class ConditionsModule {}
