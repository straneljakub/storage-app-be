/* eslint-disable prettier/prettier */
import { Notification } from "@prisma/client";
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

export class NotificationDto {
    id: number;
    value: number;
    operator: string;
    entityId: number;
    entityIdType: string;
    date: string;

    constructor(notification: Notification) {
        this.id = notification.id;
        this.value = notification.value;
        this.operator = notification.operator;
        this.entityId = notification.entityId;
        this.entityIdType = notification.entityIdType;
        this.date = notification.date;
    }
}