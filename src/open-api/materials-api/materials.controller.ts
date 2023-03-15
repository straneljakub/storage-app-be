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

import { CreateMaterialDto } from './dto/create-material.dto';
import { MaterialDto } from './dto/material.dto';
import { MaterialsService } from '../../features/materials/materials.service';
import { CountDto } from './dto/count.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @ApiResponse({
    description: 'All materials',
    type: [MaterialDto],
  })
  @Get()
  async getAll(): Promise<MaterialDto[]> {
    return this.materialsService.getAll();
  }

  @ApiCreatedResponse({
    description: 'Created Material',
    type: MaterialDto,
  })
  @ApiNotFoundResponse({
    description: 'Material was not added!',
  })
  @Post('/')
  async add(@Body() material: CreateMaterialDto) {
    const newMaterial = await this.materialsService.add(material);
    if (newMaterial) {
      return newMaterial;
    } else {
      throw new NotFoundException('Material was not added!');
    }
  }

  @ApiCreatedResponse({
    description: 'Edited Material',
    type: MaterialDto,
  })
  @ApiNotFoundResponse({
    description: 'Material was not edited!',
  })
  @Put('/:id')
  async edit(
    @Body() material: CreateMaterialDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.edit(id, material);
    if (edited) {
      return edited;
    } else {
      throw new NotFoundException('Material was not edited!');
    }
  }

  @ApiCreatedResponse({
    description: 'Edited Material',
    type: MaterialDto,
  })
  @ApiNotFoundResponse({
    description: 'Count was not added!',
  })
  @Put('/add/:id')
  async addCount(
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, countDto.count);
    if (edited) {
      return edited;
    } else {
      throw new NotFoundException('Count was not added!');
    }
  }

  @ApiCreatedResponse({
    description: 'Edited Material',
    type: MaterialDto,
  })
  @ApiNotFoundResponse({
    description: 'Material was not subtracted!',
  })
  @Put('/subtract/:id')
  async subtractCount(
    @Body() countDto: CountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const edited = await this.materialsService.addCount(id, -countDto.count);
    if (edited) {
      return edited;
    } else {
      throw new NotFoundException('Count was not subtracted!');
    }
  }

  @ApiOkResponse({
    description: 'Deleted Material',
    type: MaterialDto,
  })
  @ApiNotFoundResponse({
    description: 'Material was not deleted!',
  })
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.materialsService.delete(id);
    if (deleted) {
      return deleted;
    } else {
      throw new NotFoundException('Material was not deleted!');
    }
  }
}
