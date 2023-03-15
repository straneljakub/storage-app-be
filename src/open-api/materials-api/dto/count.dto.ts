/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CountDto {
    @ApiProperty({
        description: "Number to add/subtract to/from a material.",
        example: 5,
      })
    @IsNumber()
    @Min(0)
    count: number;
}