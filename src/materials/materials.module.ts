import { Module } from '@nestjs/common';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MaterialsController],
  providers: [MaterialsService, PrismaService],
  imports: [PrismaModule],
})
export class MaterialsModule {}
