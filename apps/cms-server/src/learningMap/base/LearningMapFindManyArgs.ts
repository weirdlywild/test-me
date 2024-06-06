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
import { LearningMapWhereInput } from "./LearningMapWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LearningMapOrderByInput } from "./LearningMapOrderByInput";

@ArgsType()
class LearningMapFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LearningMapWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LearningMapWhereInput, { nullable: true })
  @Type(() => LearningMapWhereInput)
  where?: LearningMapWhereInput;

  @ApiProperty({
    required: false,
    type: [LearningMapOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LearningMapOrderByInput], { nullable: true })
  @Type(() => LearningMapOrderByInput)
  orderBy?: Array<LearningMapOrderByInput>;

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

export { LearningMapFindManyArgs as LearningMapFindManyArgs };
