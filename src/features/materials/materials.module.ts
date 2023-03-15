import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [MaterialsService, PrismaService],
  imports: [PrismaModule],
})
export class MaterialsModule {}
