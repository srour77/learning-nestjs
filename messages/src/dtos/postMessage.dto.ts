import { IsString } from 'class-validator';

export class postMessagaDTO {
    @IsString()
    content: string
}
