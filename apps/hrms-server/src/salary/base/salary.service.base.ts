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
  Salary as PrismaSalary,
  Payslip as PrismaPayslip,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class SalaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SalaryCountArgs, "select">): Promise<number> {
    return this.prisma.salary.count(args);
  }

  async salaries(args: Prisma.SalaryFindManyArgs): Promise<PrismaSalary[]> {
    return this.prisma.salary.findMany(args);
  }
  async salary(
    args: Prisma.SalaryFindUniqueArgs
  ): Promise<PrismaSalary | null> {
    return this.prisma.salary.findUnique(args);
  }
  async createSalary(args: Prisma.SalaryCreateArgs): Promise<PrismaSalary> {
    return this.prisma.salary.create(args);
  }
  async updateSalary(args: Prisma.SalaryUpdateArgs): Promise<PrismaSalary> {
    return this.prisma.salary.update(args);
  }
  async deleteSalary(args: Prisma.SalaryDeleteArgs): Promise<PrismaSalary> {
    return this.prisma.salary.delete(args);
  }

  async findPayslips(
    parentId: string,
    args: Prisma.PayslipFindManyArgs
  ): Promise<PrismaPayslip[]> {
    return this.prisma.salary
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payslips(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.salary
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}