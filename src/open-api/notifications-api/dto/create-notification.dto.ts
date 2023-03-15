/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import  { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
    @ApiProperty({
        description: "Quantity of a material at which a condition was triggered.",
        example: 4,
    })
    @IsNumber()
    value: number;

    @ApiProperty({
        description: "Operator that defines when a condition is triggered.",
        example: "=",
    })
    @IsString()
    operator: string;


    @ApiProperty({
        description: "Id of an entity that the notification is reffering to.",
        example: 1,
      })
    @IsNumber()
    entityId: number;

    @ApiProperty({
        description: "Type of an entity that the notification is reffering to.",
        example: "material",
      })
    @IsString()
    entityIdType: string;

    @ApiProperty({
        description: "The date and time when the notification was created.",
        example: "15. 2. 2023 13:49",
      })
    @IsString()
    date: string;
}

