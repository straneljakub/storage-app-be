import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from '../../open-api/materials-api/dto/create-material.dto';
import { MaterialDto } from '../../open-api/materials-api/dto/material.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<MaterialDto[]> {
    const materials = await this.prisma.material.findMany();
    return materials.map((material) => new MaterialDto(material));
  }

  async add(material: CreateMaterialDto): Promise<MaterialDto> {
    const newMaterial = await this.prisma.material.create({
      data: material,
    });
    return new MaterialDto(newMaterial);
  }

  async edit(id: number, material: CreateMaterialDto): Promise<MaterialDto> {
    const edited = await this.prisma.material.update({
      where: {
        id: id,
      },
      data: material,
    });
    return new MaterialDto(edited);
  }

  async delete(id: number): Promise<MaterialDto> {
    const deleted = await this.prisma.material.delete({
      where: {
        id: id,
      },
    });
    return new MaterialDto(deleted);
  }

  async addCount(id: number, count: number): Promise<MaterialDto> {
    const material = await this.prisma.material.findUnique({
      where: {
        id: id,
      },
    });

    const newCount = material.count + count;
    if (newCount < 0) {
      return null;
    }

    const updatedMaterial = await this.prisma.material.update({
      where: {
        id: id,
      },
      data: {
        count: newCount,
      },
    });

    return new MaterialDto(updatedMaterial);
  }
}
