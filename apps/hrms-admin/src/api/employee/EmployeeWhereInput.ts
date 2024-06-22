import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalaryListRelationFilter } from "../salary/SalaryListRelationFilter";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  dateOfJoining?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  salaries?: SalaryListRelationFilter;
};
