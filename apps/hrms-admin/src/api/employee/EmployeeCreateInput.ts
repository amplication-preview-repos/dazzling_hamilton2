import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { SalaryCreateNestedManyWithoutEmployeesInput } from "./SalaryCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  dateOfJoining?: Date | null;
  email?: string | null;
  name?: string | null;
  position?: string | null;
  salaries?: SalaryCreateNestedManyWithoutEmployeesInput;
};
