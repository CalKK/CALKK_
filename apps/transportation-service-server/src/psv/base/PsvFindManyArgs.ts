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
import { PsvWhereInput } from "./PsvWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PsvOrderByInput } from "./PsvOrderByInput";

@ArgsType()
class PsvFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PsvWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PsvWhereInput, { nullable: true })
  @Type(() => PsvWhereInput)
  where?: PsvWhereInput;

  @ApiProperty({
    required: false,
    type: [PsvOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PsvOrderByInput], { nullable: true })
  @Type(() => PsvOrderByInput)
  orderBy?: Array<PsvOrderByInput>;

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

export { PsvFindManyArgs as PsvFindManyArgs };
