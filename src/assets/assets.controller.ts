import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { AssetStatus } from 'src/assets/entities/asset.status';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

export class FindAssetsByConditionDto {
  @ApiProperty()
  @IsOptional()
  productId?: string;

  @ApiProperty()
  @IsOptional()
  simId?: string;

  @ApiProperty({
    enum: AssetStatus,
    example: AssetStatus.InActive,
  })
  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;

  @ApiProperty()
  @IsOptional()
  buyDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userId?: number;
}

export class FindAssetsByUniqueKeyDto {}

export class CheckoutAssetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1000000)
  @Max(9999999)
  userId: number;
}

@Controller('v1/assets')
@ApiTags('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @ApiQuery({ name: 'productId', required: false })
  @ApiQuery({ name: 'simId', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'buyDate', required: false })
  @ApiQuery({ name: 'userId', required: false })
  @Get()
  find(@Query() dto: FindAssetsByConditionDto) {
    return this.assetsService.findByCondition(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    const dto = { id: id };
    return this.assetsService.findByUniqueKey(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAssetDto: UpdateAssetDto,
  ) {
    return this.assetsService.update(+id, updateAssetDto);
  }

  @Post(':id/checkout')
  checkout(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() checkoutAssetDto: CheckoutAssetDto,
  ) {
    const dto = { assetId: id, userId: checkoutAssetDto.userId };
    return this.assetsService
      .checkout(dto)
      .then((res) => res)
      .catch((e) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: e.message,
            error: 'InternalServerError',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: e,
          },
        );
      });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(+id);
  }
}
