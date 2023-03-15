/* eslint-disable prettier/prettier */
import  { IsNumber, IsString } from "class-validator";

export class CreateConditionDto {
    @IsNumber()
    value: number;

    @IsString()
    operator: string;

    @IsNumber()
    entityId: number;

    @IsString()
    entityIdType: string;
}
