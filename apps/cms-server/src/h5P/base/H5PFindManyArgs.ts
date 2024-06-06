/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { H5PWhereInput } from "./H5PWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { H5POrderByInput } from "./H5POrderByInput";

@ArgsType()
class H5PFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => H5PWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => H5PWhereInput, { nullable: true })
  @Type(() => H5PWhereInput)
  where?: H5PWhereInput;

  @ApiProperty({
    required: false,
    type: [H5POrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [H5POrderByInput], { nullable: true })
  @Type(() => H5POrderByInput)
  orderBy?: Array<H5POrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { H5PFindManyArgs as H5PFindManyArgs };
