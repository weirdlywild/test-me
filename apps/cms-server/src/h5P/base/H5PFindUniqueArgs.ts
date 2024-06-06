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
import { H5PWhereUniqueInput } from "./H5PWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class H5PFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => H5PWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => H5PWhereUniqueInput)
  @Field(() => H5PWhereUniqueInput, { nullable: false })
  where!: H5PWhereUniqueInput;
}

export { H5PFindUniqueArgs as H5PFindUniqueArgs };
