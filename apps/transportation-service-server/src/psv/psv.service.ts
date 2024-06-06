import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PsvServiceBase } from "./base/psv.service.base";

@Injectable()
export class PsvService extends PsvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
