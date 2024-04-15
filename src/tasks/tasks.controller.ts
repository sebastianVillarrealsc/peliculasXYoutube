import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'; // Importa Response de express
import { join } from 'path';

@Controller('peliculas')
export class TasksController {
  @Get()
  getPeliculas(@Res() res: Response) {
    const jsonFilePath = join(__dirname, '../../data-peliculas/peliculas.json');
    return res.sendFile(jsonFilePath);
  }
}


