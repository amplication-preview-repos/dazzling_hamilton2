import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PayslipUpdateManyWithoutSalariesInput } from "./PayslipUpdateManyWithoutSalariesInput";

export type SalaryUpdateInput = {
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  payslips?: PayslipUpdateManyWithoutSalariesInput;
};
