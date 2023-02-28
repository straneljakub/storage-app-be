import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { Material } from '@prisma/client';
import { CreateMaterialDto } from 'src/dto/material.dto';
import { ValidationPipe } from '../validation/validation.pipe';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  async getAll(): Promise<Material[]> {
    return this.materialsService.getAll();
  }

  @Post('/')
  async add(
    @Res() res,
    @Body(new ValidationPipe()) material: CreateMaterialDto,
  ) {
    const newMaterial = this.materialsService.add(material);
    if (newMaterial) {
      return res.status(HttpStatus.OK).json({
        message: 'Material added!',
        material: await newMaterial,
      });
    } else {
      throw new NotFoundException('Material was not added!');
    }
  }

  @Put('/:id')
  async edit(
    @Res() res,
    @Body(new ValidationPipe()) material: CreateMaterialDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = this.materialsService.edit(id, material);
    if (edited) {
      return res.status(HttpStatus.OK).json({
        message: 'Material edited!',
        edited: await edited,
      });
    } else {
      throw new NotFoundException('Material was not edited!');
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deleted = this.materialsService.delete(id);
    if (deleted) {
      return res.status(HttpStatus.OK).json({
        message: 'Material deleted!',
        deleted: await deleted,
      });
    } else {
      throw new NotFoundException('Material was not deleted!');
    }
  }
}
