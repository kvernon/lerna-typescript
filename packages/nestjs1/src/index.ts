import {Controller, createParamDecorator, ExecutionContext, HttpCode, HttpStatus, Post} from "@nestjs/common";

export const theParmFactory = (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
};

export const BodyDecorator = createParamDecorator(
    theParmFactory
);

@Controller('test')
export class TestController {
    @Post()
    @HttpCode(HttpStatus.OK)
    all(@BodyDecorator() body: any) {
        return body;
    }
}
