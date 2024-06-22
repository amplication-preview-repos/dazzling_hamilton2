import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalaryWhereUniqueInput } from "../salary/SalaryWhereUniqueInput";

export type PayslipWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  salary?: SalaryWhereUniqueInput;
};
