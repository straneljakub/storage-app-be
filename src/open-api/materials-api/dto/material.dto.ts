/* eslint-disable prettier/prettier */
import { Material } from '@prisma/client';

export class MaterialDto {
    id: number;
    title: string;
    count: number;
    description: string;
    
    constructor(material: Material) {
      this.id = material.id;
      this.title = material.title;
      this.count = material.count;
      this.description = material.description;
    }
  }