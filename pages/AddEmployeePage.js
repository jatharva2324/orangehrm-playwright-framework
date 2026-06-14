import { expect } from "@playwright/test";
import { PersonalDetailsPage } from "./PersonalDetailsPage";

export class AddEmployeePage {
  constructor(page) {
    this.page = page;
    this.addEmployeeDiv = this.page.locator(".orangehrm-background-container");

    this.firstNameInput = this.page.getByPlaceholder("First Name");

    this.middleNameInput = this.page.getByPlaceholder("Middle Name");

    this.lastNameInput = this.page.getByPlaceholder("Last Name");

    this.saveButton = this.page.getByRole("button", {
      name: "Save",
    });
  }

  async verifyLoaded() {
    await expect(this.addEmployeeDiv).toBeVisible();
    await expect(this.saveButton).toBeVisible();
  }

  async enterFirstName(firstName) {
    await this.firstNameInput.type(firstName);
  }

  async enterMiddleName(middleName) {
    await this.middleNameInput.type(middleName);
  }

  async enterLastName(lastName) {
    await this.lastNameInput.type(lastName);
  }

  async enterEmployeeId(employeeId) {}

  async clickSave() {
    await this.saveButton.click();
  }

  async addEmployee(employeeData) {
    const { firstName, middleName, lastName, employeeId } = employeeData;

    await this.enterFirstName(firstName);

    if (middleName) {
      await this.enterMiddleName(middleName);
    }

    await this.enterLastName(lastName);

    if (employeeId) {
      await this.enterEmployeeId(employeeId);
    }

    await this.clickSave();
    const personalDetailsPage = new PersonalDetailsPage(this.page);

    await personalDetailsPage.verifyLoaded();

    return personalDetailsPage;
  }
}
