import { Injectable } from '@nestjs/common';

@Injectable()
export class MaterialsService {
  get(): string {
    return 'materials';
  }
}
