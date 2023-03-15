/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateMaterialDto {
  @ApiProperty({
    description: "Title of a material.",
    example: "Iron",
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: "Quantity of a material.",
    example: 5,
  })
  @IsNumber()
  @Min(0)
  count: number;

  @ApiProperty({
    description: "Description of a material.",
    example: "This material is heavy.",
  })
  @IsString()
  description: string;
}

