import { Controller } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { Get } from '@nestjs/common'

@Controller('computer')
export class ComputerController {
    cpuService: CpuService;
    diskService: DiskService;

    constructor(_cpuService: CpuService, _diskService: DiskService) {
        this.cpuService = _cpuService;
        this.diskService = _diskService;
    }

    @Get('/run')
    run() {
        return [
            this.diskService.readFile('~/home/file.txt'),
            this.cpuService.compute(1, 2)
        ]
    }
}
