import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    powerService: PowerService;

    constructor(_powerService: PowerService) {
        this.powerService = _powerService;
    }

    compute(x: number, y: number) {
        console.log('requesting 10 watts from power service');
        this.powerService.supplyPower(10);
        console.log('doing computations');
        return  x + y;
    }
}
