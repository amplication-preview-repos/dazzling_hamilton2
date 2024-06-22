import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SalaryTitle } from "../salary/SalaryTitle";

export const PayslipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="salary.id" reference="Salary" label="Salary">
          <SelectInput optionText={SalaryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
