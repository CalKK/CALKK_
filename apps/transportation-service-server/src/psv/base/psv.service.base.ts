/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Psv as PrismaPsv, Route as PrismaRoute } from "@prisma/client";

export class PsvServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PsvCountArgs, "select">): Promise<number> {
    return this.prisma.psv.count(args);
  }

  async psvs<T extends Prisma.PsvFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsvFindManyArgs>
  ): Promise<PrismaPsv[]> {
    return this.prisma.psv.findMany<Prisma.PsvFindManyArgs>(args);
  }
  async psv<T extends Prisma.PsvFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsvFindUniqueArgs>
  ): Promise<PrismaPsv | null> {
    return this.prisma.psv.findUnique(args);
  }
  async createPsv<T extends Prisma.PsvCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsvCreateArgs>
  ): Promise<PrismaPsv> {
    return this.prisma.psv.create<T>(args);
  }
  async updatePsv<T extends Prisma.PsvUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsvUpdateArgs>
  ): Promise<PrismaPsv> {
    return this.prisma.psv.update<T>(args);
  }
  async deletePsv<T extends Prisma.PsvDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PsvDeleteArgs>
  ): Promise<PrismaPsv> {
    return this.prisma.psv.delete(args);
  }

  async getRoute(parentId: string): Promise<PrismaRoute | null> {
    return this.prisma.psv
      .findUnique({
        where: { id: parentId },
      })
      .route();
  }
}