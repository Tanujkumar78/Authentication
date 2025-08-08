import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!become a fullstack developer with nestjs and angular';
  }
}