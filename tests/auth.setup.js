import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { environment } from '../config/environment';

setup('authenticate admin user',async ({page}) =>{
    await page.goto(environment.baseUrl);

    const loginPage = new LoginPage(page);

    await loginPage.loginAsAdmin(
        environment.adminUser.username,
        environment.adminUser.password
    );

    await page.context().storageState({
        path: 'playwright/.auth/admin.json'
    });
});