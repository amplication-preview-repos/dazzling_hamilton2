/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Payslip as PrismaPayslip,
  Salary as PrismaSalary,
} from "@prisma/client";

export class PayslipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PayslipCountArgs, "select">): Promise<number> {
    return this.prisma.payslip.count(args);
  }

  async payslips(args: Prisma.PayslipFindManyArgs): Promise<PrismaPayslip[]> {
    return this.prisma.payslip.findMany(args);
  }
  async payslip(
    args: Prisma.PayslipFindUniqueArgs
  ): Promise<PrismaPayslip | null> {
    return this.prisma.payslip.findUnique(args);
  }
  async createPayslip(args: Prisma.PayslipCreateArgs): Promise<PrismaPayslip> {
    return this.prisma.payslip.create(args);
  }
  async updatePayslip(args: Prisma.PayslipUpdateArgs): Promise<PrismaPayslip> {
    return this.prisma.payslip.update(args);
  }
  async deletePayslip(args: Prisma.PayslipDeleteArgs): Promise<PrismaPayslip> {
    return this.prisma.payslip.delete(args);
  }

  async getSalary(parentId: string): Promise<PrismaSalary | null> {
    return this.prisma.payslip
      .findUnique({
        where: { id: parentId },
      })
      .salary();
  }
}