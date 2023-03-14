import {
  Controller,
  Get,
  Post,
  Body,
  NotFoundException,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CountDto } from 'src/materials/dto/count.dto';
import { CreateMaterialDto, MaterialDto } from 'src/materials/dto/material.dto';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  async getAll(): Promise<MaterialDto[]> {
    return this.materialsService.getAll();
  }

  @Post('/')
  async add(@Body() material: CreateMaterialDto) {
    const newMaterial = await this.materialsService.add(material);
    if (newMaterial) {
      return JSON.stringify({
        message: 'Material added!',
        material: newMaterial,
      });
    } else {
      throw new NotFoundException('Material was not added!');
    }
  }

  @Put('/:id')
  async edit(
    @Body() material: CreateMaterialDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.edit(id, material);
    if (edited) {
      return JSON.stringify({
        message: 'Material edited!',
        edited: edited,
      });
    } else {
      throw new NotFoundException('Material was not edited!');
    }
  }

  @Put('/add/:id')
  async addCount(
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, countDto.count);
    if (edited) {
      return JSON.stringify({
        message: 'Count added!',
        edited: edited,
      });
    } else {
      throw new NotFoundException('Count was not added!');
    }
  }

  @Put('/subtract/:id')
  async subtractCount(
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, -countDto.count);
    if (edited) {
      return JSON.stringify({
        message: 'Count subtracted!',
        edited: edited,
      });
    } else {
      throw new NotFoundException('Count was not subtracted!');
    }
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.materialsService.delete(id);
    if (deleted) {
      return JSON.stringify({
        message: 'Material deleted!',
        deleted: deleted,
      });
    } else {
      throw new NotFoundException('Material was not deleted!');
    }
  }
}
