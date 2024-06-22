/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Salary } from "./Salary";
import { SalaryCountArgs } from "./SalaryCountArgs";
import { SalaryFindManyArgs } from "./SalaryFindManyArgs";
import { SalaryFindUniqueArgs } from "./SalaryFindUniqueArgs";
import { CreateSalaryArgs } from "./CreateSalaryArgs";
import { UpdateSalaryArgs } from "./UpdateSalaryArgs";
import { DeleteSalaryArgs } from "./DeleteSalaryArgs";
import { PayslipFindManyArgs } from "../../payslip/base/PayslipFindManyArgs";
import { Payslip } from "../../payslip/base/Payslip";
import { Employee } from "../../employee/base/Employee";
import { SalaryService } from "../salary.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Salary)
export class SalaryResolverBase {
  constructor(
    protected readonly service: SalaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "read",
    possession: "any",
  })
  async _salariesMeta(
    @graphql.Args() args: SalaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Salary])
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "read",
    possession: "any",
  })
  async salaries(@graphql.Args() args: SalaryFindManyArgs): Promise<Salary[]> {
    return this.service.salaries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Salary, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "read",
    possession: "own",
  })
  async salary(
    @graphql.Args() args: SalaryFindUniqueArgs
  ): Promise<Salary | null> {
    const result = await this.service.salary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Salary)
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "create",
    possession: "any",
  })
  async createSalary(@graphql.Args() args: CreateSalaryArgs): Promise<Salary> {
    return await this.service.createSalary({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Salary)
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "update",
    possession: "any",
  })
  async updateSalary(
    @graphql.Args() args: UpdateSalaryArgs
  ): Promise<Salary | null> {
    try {
      return await this.service.updateSalary({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Salary)
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "delete",
    possession: "any",
  })
  async deleteSalary(
    @graphql.Args() args: DeleteSalaryArgs
  ): Promise<Salary | null> {
    try {
      return await this.service.deleteSalary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Payslip], { name: "payslips" })
  @nestAccessControl.UseRoles({
    resource: "Payslip",
    action: "read",
    possession: "any",
  })
  async findPayslips(
    @graphql.Parent() parent: Salary,
    @graphql.Args() args: PayslipFindManyArgs
  ): Promise<Payslip[]> {
    const results = await this.service.findPayslips(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployee(
    @graphql.Parent() parent: Salary
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}