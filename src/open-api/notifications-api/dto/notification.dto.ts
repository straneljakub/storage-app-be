/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Notification } from "@prisma/client";

export class NotificationDto {
    @ApiProperty({
        description: "Id of a notification.",
        example: 1,
    })
    id: number;
    @ApiProperty({
        description: "Quantity of a material at which a condition was triggered.",
        example: 4,
    })
    value: number;
    @ApiProperty({
        description: "Operator that defines when a condition is triggered.",
        example: "=",
    })
    operator: string;
    @ApiProperty({
        description: "Id and type of an entity that the notification is reffering to.",
        example: {id: 1, type: "material"},
      })
    entityId: {
        id: number;
        type: string;
    }
    @ApiProperty({
        description: "The date and time when the notification was created.",
        example: "15. 2. 2023 13:49",
      })
    date: string;

    constructor(notification: Notification) {
        this.id = notification.id;
        this.value = notification.value;
        this.operator = notification.operator;
        this.entityId.id = notification.entityId;
        this.entityId.type = notification.entityIdType;
        this.date = notification.date;
    }
}