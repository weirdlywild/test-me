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
import { Type } from "class-transformer";

@ArgsType()
class LearningMapCountArgs {
  @ApiProperty({
    required: false,
    type: () => LearningMapWhereInput,
  })
  @Field(() => LearningMapWhereInput, { nullable: true })
  @Type(() => LearningMapWhereInput)
  where?: LearningMapWhereInput;
}

export { LearningMapCountArgs as LearningMapCountArgs };
