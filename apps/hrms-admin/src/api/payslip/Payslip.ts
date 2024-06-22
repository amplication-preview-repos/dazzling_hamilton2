import { Salary } from "../salary/Salary";

export type Payslip = {
  createdAt: Date;
  date: Date | null;
  id: string;
  salary?: Salary | null;
  updatedAt: Date;
};
