import { test, expect } from "../fixtures/testFixtures";
import employees from "../test-data/employees.json";

test("Create an Employee", async ({ dashboardPage }) => {

  const pimPage = await dashboardPage.sidebar.navigateToPIM();

  await pimPage.verifyLoaded();

  const addEmployeePage = await pimPage.navigateToAddEmployee();

  await addEmployeePage.verifyLoaded();

  const personalDetailsPage = await addEmployeePage.addEmployee(
    employees.employee1,
  );

  await personalDetailsPage.verifyEmployeeDetails(
    employees
  );
});


