import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SalaryTitle } from "../salary/SalaryTitle";

export const PayslipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="salary.id" reference="Salary" label="Salary">
          <SelectInput optionText={SalaryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
