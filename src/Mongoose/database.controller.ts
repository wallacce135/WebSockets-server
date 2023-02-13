import { Controller, Get, HttpStatus, Req, Res, Post} from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) { }


    @Post("saveData")
    async SaveData(@Req() request, @Res() response): Promise<any> { 
        console.log(request.body);
        const data = this.databaseService.createNew(request.body);
        return await response.status(HttpStatus.CREATED).json(data);
    } 

    @Get('getData')
    async GetAllData(@Req() request, @Res() response): Promise<any>{
        
        let sendingData = await this.databaseService.getAllData();
        
        return await response.status(HttpStatus.OK).json(sendingData);

    }

}