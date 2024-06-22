import { Employee } from "../employee/Employee";
import { Payslip } from "../payslip/Payslip";

export type Salary = {
  amount: number | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  payslips?: Array<Payslip>;
  updatedAt: Date;
};
