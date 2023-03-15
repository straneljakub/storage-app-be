/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import  { IsNumber, IsString } from "class-validator";

export class CreateConditionDto {
    @ApiProperty({
        description: "Quantity of a material at which a condition will trigger when met.",
        example: 5,
      })
    @IsNumber()
    value: number;
    
    @ApiProperty({
        description: "Defines at what circumstance a condition triggers based on value.",
        example: ">",
      })
    @IsString()
    operator: string;
    
    @ApiProperty({
        description: "Id of an entity that the condition is reffering to.",
        example: 1,
      })
    @IsNumber()
    entityId: number;
    
    @ApiProperty({
        description: "Type of an entity that the condition is reffering to.",
        example: "material",
      })
    @IsString()
    entityIdType: string;
}
