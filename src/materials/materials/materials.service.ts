import { Injectable } from '@nestjs/common';
import { Material, PrismaClient } from '@prisma/client';
import { CreateMaterialDto } from 'src/dto/material.dto';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll(): Promise<Material[]> {
    return this.prisma.material.findMany();
  }

  async add(material: CreateMaterialDto): Promise<Material> {
    const newMaterial = await this.prisma.material.create({
      data: material,
    });
    return newMaterial;
  }

  async edit(id: number, material: CreateMaterialDto): Promise<Material> {
    const edited = this.prisma.material.update({
      where: {
        id: id,
      },
      data: material,
    });
    return edited;
  }

  async delete(id: number) {
    const deleted = this.prisma.material.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
