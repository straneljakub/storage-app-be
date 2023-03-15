/* eslint-disable prettier/prettier */
import  { IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
    @IsNumber()
    value: number;

    @IsString()
    operator: string;

    @IsNumber()
    entityId: number;

    @IsString()
    entityIdType: string;

    @IsString()
    date: string;
}

