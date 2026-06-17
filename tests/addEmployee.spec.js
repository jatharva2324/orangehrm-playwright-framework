import { test, expect } from "../fixtures/testFixtures";
import employees from "../test-data/employees.json";

test("Create an Employee", async ({ dashboardPage }) => {
  const pimPage = await test.step("Navigate to PIM", async () => {
    return await dashboardPage.sidebar.navigateToPIM();
  });

  test.step("Verify PIM page loaded", async () => {
    await pimPage.verifyLoaded();
  });

  const addEmployeePage = await test.step("Navigate to Add Employee page", async () => {
    return await pimPage.navigateToAddEmployee();
  });

  test.step("Verify Add Employee page loaded", async () => {
    await addEmployeePage.verifyLoaded();
  });
  const personalDetailsPage =
    await test.step("Create Employee", async () => {
      return await addEmployeePage.addEmployee(employees.employee1);
    });

  test.step("Verify Employee Details", async () => {
    await personalDetailsPage.verifyEmployeeDetails(employees);
  });
});
