import { PIMPage } from "../pages/PIMPage";

export class Sidebar {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.getByRole("link", {
      name: "Admin",
    });

    this.pimMenu = page.getByRole("link", {
      name: "PIM",
    });
  }

  async navigate(menuName) {
    await this.page
      .getByRole("link", {
        name: menuName,
      })
      .click();
  }

  async navigateToPIM() {
    await this.navigate("PIM");
    return new PIMPage(this.page);
  }

  async navigateToAdmin() {
    await this.navigate("Admin");
    return new PIMPage(this.page);
  }
}
