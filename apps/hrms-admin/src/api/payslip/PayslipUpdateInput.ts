import { SalaryWhereUniqueInput } from "../salary/SalaryWhereUniqueInput";

export type PayslipUpdateInput = {
  date?: Date | null;
  salary?: SalaryWhereUniqueInput | null;
};
