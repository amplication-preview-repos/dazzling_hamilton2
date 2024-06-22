import { SalaryWhereUniqueInput } from "../salary/SalaryWhereUniqueInput";

export type PayslipCreateInput = {
  date?: Date | null;
  salary?: SalaryWhereUniqueInput | null;
};
