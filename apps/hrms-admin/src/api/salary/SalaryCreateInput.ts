import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipCreateNestedManyWithoutSalariesInput } from "./PayslipCreateNestedManyWithoutSalariesInput";

export type SalaryCreateInput = {
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  payslips?: PayslipCreateNestedManyWithoutSalariesInput;
};
