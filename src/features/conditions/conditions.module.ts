import { Module } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ConditionsService, PrismaService],
  imports: [PrismaModule],
})
export class ConditionsModule {}
