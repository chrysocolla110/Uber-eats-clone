// Native.
/* eslint-disable no-useless-escape */

// Package.
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Logger } from "../../../logger/logger";
import { FindUserDto, UserSignupDto } from "./dto/user-request.dto";
import { UserSignupResponseDto } from "./dto/user-response.dto";
import { UserService } from "./user.service";

// user signup
// fetch user info
// reset password
// update your own profile
// fetch list of all users if role/permission is admin
@ApiBearerAuth("authorization")
@Controller("users")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  })
)
@ApiTags("users")
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly logger: Logger
  ) {}

  // define all our user routes

  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    // ADD RESPONSE DTO TYPE HERE
    type: UserSignupResponseDto,
    description: "USER CREATED SUCCESSFULLY",
  })
  @ApiOkResponse({ type: UserSignupResponseDto, description: "" })
  @ApiOperation({ description: "user create api " })
  @ApiConsumes("APPLICATION/JSON")
  @Post("")
  public async CreateUser(@Body() body: UserSignupDto) {
    this.logger.info(JSON.stringify(body));
    return this.service.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    type: UserSignupResponseDto,
    description: "USER CREATED SUCCESSFULLY",
  })
  @ApiOkResponse({ type: UserSignupResponseDto, description: "" })
  @ApiOperation({ description: "find users based on props " })
  @ApiConsumes("application/json")
  @Post("")
  public async findUser(@Body() body: FindUserDto) {
    this.logger.info(JSON.stringify(body));
    return this.service.findUserByProperty(body);
  }
}
