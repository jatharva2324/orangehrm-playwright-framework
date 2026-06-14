import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import employees from "../test-data/employees.json";

test("Create an Employee", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://opensource-demo.orangehrmlive.com/");

  const dashboardPage = await loginPage.loginAsAdmin('Admin','admin123');

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
