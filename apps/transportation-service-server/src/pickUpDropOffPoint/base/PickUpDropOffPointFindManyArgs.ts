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
import { PickUpDropOffPointWhereInput } from "./PickUpDropOffPointWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PickUpDropOffPointOrderByInput } from "./PickUpDropOffPointOrderByInput";

@ArgsType()
class PickUpDropOffPointFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PickUpDropOffPointWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PickUpDropOffPointWhereInput, { nullable: true })
  @Type(() => PickUpDropOffPointWhereInput)
  where?: PickUpDropOffPointWhereInput;

  @ApiProperty({
    required: false,
    type: [PickUpDropOffPointOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PickUpDropOffPointOrderByInput], { nullable: true })
  @Type(() => PickUpDropOffPointOrderByInput)
  orderBy?: Array<PickUpDropOffPointOrderByInput>;

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

export { PickUpDropOffPointFindManyArgs as PickUpDropOffPointFindManyArgs };