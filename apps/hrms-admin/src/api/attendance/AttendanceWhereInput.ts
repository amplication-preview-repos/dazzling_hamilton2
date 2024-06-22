import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  status?: StringNullableFilter;
};
