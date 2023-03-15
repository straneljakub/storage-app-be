/* eslint-disable prettier/prettier */
import { Condition } from "@prisma/client";

export class ConditionDto {
    id: number;
    value: number;
    operator: string;
    entityId: number;
    entityIdType: string;

    constructor(condition: Condition) {
        this.id = condition.id;
        this.value = condition.value;
        this.operator = condition.operator;
        this.entityId = condition.entityId;
        this.entityIdType = condition.entityIdType;
    }
}