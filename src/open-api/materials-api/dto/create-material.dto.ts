/* eslint-disable prettier/prettier */
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

