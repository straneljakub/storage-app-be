/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Material } from '@prisma/client';

export class MaterialDto {
  @ApiProperty({
    description: "Id of a material.",
    example: 1,
  })
  id: number;
  @ApiProperty({
    description: "Title of a material.",
    example: "Iron",
  })
  title: string;
  @ApiProperty({
    description: "Quantity of a material.",
    example: 5,
  })
  count: number;
  @ApiProperty({
    description: "Description of a material.",
    example: "This material is heavy.",
  })
  description: string;

  constructor(material: Material) {
    this.id = material.id;
    this.title = material.title;
    this.count = material.count;
    this.description = material.description;
  }
}