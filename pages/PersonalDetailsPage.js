import { Sidebar } from "../components/Sidebar";
import { expect } from "@playwright/test";

export class PersonalDetailsPage {
  constructor(page) {
    this.page = page;
    this.sidebar = new Sidebar(page);

    this.header = this.page.getByRole('heading',{
      name : 'Personal Details'
    });

    this.saveButton =
    this.page.getByRole('button', {
        name: 'Save'
    }).first();
    
    this.employeeName = this.page.locator("div.orangehrm-edit-employee-name h6")
  }

  async verifyLoaded() {
    await expect(this.header).toBeVisible();
    await expect(this.saveButton).toBeVisible();
  }

  async  verifyEmployeeDetails(employeeData){
      const {firstName,lastName} = employeeData;

      const expectedFullName = [firstName, lastName]
            .filter(Boolean)
            .join(' ');

      await expect(this.employeeName).toHaveText(expectedFullName);

  }
}
