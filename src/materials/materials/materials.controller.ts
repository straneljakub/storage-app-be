import { Controller, Get } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { Material } from '.prisma/client';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  getAll(): any {
    return this.materialsService.getAll();
  }
}
