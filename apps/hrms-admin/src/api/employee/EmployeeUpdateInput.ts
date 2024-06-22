import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { SalaryUpdateManyWithoutEmployeesInput } from "./SalaryUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  dateOfJoining?: Date | null;
  email?: string | null;
  name?: string | null;
  position?: string | null;
  salaries?: SalaryUpdateManyWithoutEmployeesInput;
};
