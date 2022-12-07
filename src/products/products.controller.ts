import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { ProductsCommandUsecase } from 'src/products/usecases/products.command.usecase';
import { ApiTags } from '@nestjs/swagger';
import { ProductsQueryUsecase } from 'src/products/usecases/products.query.usecase';

import { FindProductByIdDto } from 'src/products/dto/find-product-by-id.dto';
import { FindProductByConditionDto } from 'src/products/dto/find-product-by-condition.dto';

@Controller('v1/products')
@ApiTags('products')
export class ProductsController {
  constructor(
    private readonly command: ProductsCommandUsecase,
    private readonly query: ProductsQueryUsecase,
  ) {}

  @Get()
  find(@Query() dto: FindProductByConditionDto) {
    return this.query.productsByCondition(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    const dto = new FindProductByIdDto(id);
    return this.query.productByUniqueKey(dto);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.command.createProduct(createProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.command.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.command.deleteProduct(id);
  }
}
