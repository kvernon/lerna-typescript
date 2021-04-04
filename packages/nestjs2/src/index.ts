import {Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {BodyDecorator} from "../../nestjs1";

@Controller('test')
export class Test2Controller {
    @Post()
    @HttpCode(HttpStatus.OK)
    all(@BodyDecorator() body: any) {
        return body;
    }
}
