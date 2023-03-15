import { Module } from '@nestjs/common';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from 'src/features/materials/materials.service';
import { MaterialsModule } from 'src/features/materials/materials.module';
import { PrismaService } from 'src/features/prisma/prisma.service';

@Module({
  controllers: [MaterialsController],
  providers: [MaterialsService, PrismaService],
  imports: [MaterialsModule],
})
export class MaterialsApiModule {}
