import { Injectable } from '@nestjs/common';
import { Material } from '@prisma/client';
import { CreateMaterialDto } from 'src/materials/dto/material.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

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

  async delete(id: number): Promise<Material> {
    const deleted = this.prisma.material.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }

  async addCount(id: number, count: number) {
    const material = await this.prisma.material.findUnique({
      where: {
        id: id,
      },
    });

    const newCount = material.count + count;
    if (newCount < 0) {
      return null;
    }

    const updatedMaterial = this.prisma.material.update({
      where: {
        id: id,
      },
      data: {
        count: newCount,
      },
    });

    return updatedMaterial;
  }
}
