/* eslint-disable prettier/prettier */
import { Material } from '@prisma/client';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  title: string;

  @IsNumber()
  @Min(0)
  count: number;

  @IsString()
  description: string;
}

export class MaterialDto {
  id: number;
  title: string;
  count: number;
  description: string;
  
  constructor(material: Material) {
    this.id = material.id;
    this.title = material.title;
    this.count = material.count;
    this.description = material.description;
  }
}