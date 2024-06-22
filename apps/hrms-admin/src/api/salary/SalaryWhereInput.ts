import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PayslipListRelationFilter } from "../payslip/PayslipListRelationFilter";

export type SalaryWhereInput = {
  amount?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  payslips?: PayslipListRelationFilter;
};
