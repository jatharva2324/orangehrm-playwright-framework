import { expect } from "@playwright/test";
import { Sidebar } from "../components/Sidebar";
import { AddEmployeePage } from "./AddEmployeePage";

export class PIMPage {
  constructor(page) {
    this.page = page;
    this.sidebar = new Sidebar(page);

    this.employeeInformation = this.page.locator(
      ".orangehrm-background-container",
    );

    this.addEmployeeButton = page.getByRole("button", {
      name: " Add ",
    });
  }

  async verifyLoaded() {
    await expect(this.employeeInformation).toBeVisible();
    await expect(this.addEmployeeButton).toBeVisible();
  }

  async navigateToAddEmployee() {
    await this.addEmployeeButton.click();

    return new AddEmployeePage(this.page);
  }
}
