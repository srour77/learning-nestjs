import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    powerService: PowerService;

    constructor(_powerService: PowerService) {
        this.powerService = _powerService;
    }

    readFile(path: string) {
        console.log('requesting 30 watts from power service');
        this.powerService.supplyPower(30);
        console.log(`reading file at ${path}`);
        return '';
    }
} 
