import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PickUpDropOffPointServiceBase } from "./base/pickUpDropOffPoint.service.base";

@Injectable()
export class PickUpDropOffPointService extends PickUpDropOffPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
