/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { H5PWhereInput } from "./H5PWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class H5PListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => H5PWhereInput,
  })
  @ValidateNested()
  @Type(() => H5PWhereInput)
  @IsOptional()
  @Field(() => H5PWhereInput, {
    nullable: true,
  })
  every?: H5PWhereInput;

  @ApiProperty({
    required: false,
    type: () => H5PWhereInput,
  })
  @ValidateNested()
  @Type(() => H5PWhereInput)
  @IsOptional()
  @Field(() => H5PWhereInput, {
    nullable: true,
  })
  some?: H5PWhereInput;

  @ApiProperty({
    required: false,
    type: () => H5PWhereInput,
  })
  @ValidateNested()
  @Type(() => H5PWhereInput)
  @IsOptional()
  @Field(() => H5PWhereInput, {
    nullable: true,
  })
  none?: H5PWhereInput;
}
export { H5PListRelationFilter as H5PListRelationFilter };
