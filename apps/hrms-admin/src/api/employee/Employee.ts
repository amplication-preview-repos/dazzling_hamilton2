import { Attendance } from "../attendance/Attendance";
import { Salary } from "../salary/Salary";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  dateOfJoining: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  position: string | null;
  salaries?: Array<Salary>;
  updatedAt: Date;
};
