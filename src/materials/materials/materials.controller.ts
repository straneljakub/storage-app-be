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
import { CountDto } from 'src/dto/count.dto';
import { CreateMaterialDto } from 'src/dto/material.dto';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  async getAll(): Promise<Material[]> {
    return this.materialsService.getAll();
  }

  @Post('/')
  async add(@Res() res, @Body() material: CreateMaterialDto) {
    const newMaterial = await this.materialsService.add(material);
    if (newMaterial) {
      return res.status(HttpStatus.OK).json({
        message: 'Material added!',
        material: newMaterial,
      });
    } else {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Material was not added!',
      });
    }
  }

  @Put('/:id')
  async edit(
    @Res() res,
    @Body() material: CreateMaterialDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.edit(id, material);
    if (edited) {
      return res.status(HttpStatus.OK).json({
        message: 'Material edited!',
        edited: edited,
      });
    } else {
      throw new NotFoundException('Material was not edited!');
    }
  }

  @Put('/add/:id')
  async addCount(
    @Res() res,
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, countDto.count);
    if (edited) {
      return res.status(HttpStatus.OK).json({
        message: 'Count added!',
        edited: edited,
      });
    } else {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Count was not added!',
      });
    }
  }

  @Put('/subtract/:id')
  async subtractCount(
    @Res() res,
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, -countDto.count);
    if (edited) {
      return res.status(HttpStatus.OK).json({
        message: 'Count subtracted!',
        edited: edited,
      });
    } else {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Count not subtracted!',
      });
    }
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deleted = await this.materialsService.delete(id);
    if (deleted) {
      return res.status(HttpStatus.OK).json({
        message: 'Material deleted!',
        deleted: deleted,
      });
    } else {
      throw new NotFoundException('Material was not deleted!');
    }
  }
}
