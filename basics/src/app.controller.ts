import { Controller, Get } from '@nestjs/common'

@Controller('/app')
class AppController {
    @Get('/home')
    getHome() {
        return 'hello world';
    }
}

export default AppController