import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { HolidayList } from "./holiday/HolidayList";
import { HolidayCreate } from "./holiday/HolidayCreate";
import { HolidayEdit } from "./holiday/HolidayEdit";
import { HolidayShow } from "./holiday/HolidayShow";
import { SalaryList } from "./salary/SalaryList";
import { SalaryCreate } from "./salary/SalaryCreate";
import { SalaryEdit } from "./salary/SalaryEdit";
import { SalaryShow } from "./salary/SalaryShow";
import { PayslipList } from "./payslip/PayslipList";
import { PayslipCreate } from "./payslip/PayslipCreate";
import { PayslipEdit } from "./payslip/PayslipEdit";
import { PayslipShow } from "./payslip/PayslipShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HRMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Holiday"
          list={HolidayList}
          edit={HolidayEdit}
          create={HolidayCreate}
          show={HolidayShow}
        />
        <Resource
          name="Salary"
          list={SalaryList}
          edit={SalaryEdit}
          create={SalaryCreate}
          show={SalaryShow}
        />
        <Resource
          name="Payslip"
          list={PayslipList}
          edit={PayslipEdit}
          create={PayslipCreate}
          show={PayslipShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
