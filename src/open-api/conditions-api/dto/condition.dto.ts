/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Condition } from "@prisma/client";

export class ConditionDto {
    @ApiProperty({
        description: "Id of condition",
        example: 1,
    })
    id: number;
    @ApiProperty({
        description: "Quantity of a material at which a condition will trigger when met.",
        example: 5,
      })
    value: number;
    @ApiProperty({
        description: "Defines at what circumstance a condition triggers based on value.",
        example: ">",
      })
    operator: string;
    @ApiProperty({
        description: "Id and type of an entity that the condition is reffering to.",
        example: {id: 1, type: "material"},
      })
    entityId: {
        id: number;
        type: string;
    }

    constructor(condition: Condition) {
        this.id = condition.id;
        this.value = condition.value;
        this.operator = condition.operator;
        this.entityId.id = condition.entityId;
        this.entityId.type = condition.entityIdType;
    }
}