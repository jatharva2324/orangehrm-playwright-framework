import { expect } from "@playwright/test";
import { DashboardPage } from "./DashboardPage";
export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");

    this.loginButton = page.getByRole("button", {
      name: "Login",
    });

    this.errorMessage = page.getByText("Invalid credentials");
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();

    return new DashboardPage(this.page);
  }

  async loginAsAdmin(username,password){
    return this.login(username,password);
  }

  async verifyLoginPageLoaded() {
    await expect(this.usernameInput).toBeVisible();

    await expect(this.passwordInput).toBeVisible();

    await expect(this.loginButton).toBeVisible();
  }

  async verifyInvalidCredentials() {
    await expect(this.errorMessage).toBeVisible();
  }
}
