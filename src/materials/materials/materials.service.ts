import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaClient) {}

  getAll(): any {
    return this.prisma.material.findMany();
  }
}
