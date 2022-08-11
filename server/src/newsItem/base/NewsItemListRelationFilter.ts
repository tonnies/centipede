/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewsItemWhereInput } from "./NewsItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NewsItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NewsItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NewsItemWhereInput)
  @IsOptional()
  @Field(() => NewsItemWhereInput, {
    nullable: true,
  })
  every?: NewsItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => NewsItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NewsItemWhereInput)
  @IsOptional()
  @Field(() => NewsItemWhereInput, {
    nullable: true,
  })
  some?: NewsItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => NewsItemWhereInput,
  })
  @ValidateNested()
  @Type(() => NewsItemWhereInput)
  @IsOptional()
  @Field(() => NewsItemWhereInput, {
    nullable: true,
  })
  none?: NewsItemWhereInput;
}
export { NewsItemListRelationFilter };