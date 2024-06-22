import { SortOrder } from "../../util/SortOrder";

export type SalaryOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
