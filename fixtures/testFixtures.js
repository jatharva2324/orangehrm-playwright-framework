import { test as base } from '@playwright/test';
import {LoginPage } from '../pages/LoginPage';
import { environment } from '../config/environment';

export const test = base.extend({
    dashboardPage: async({page},use) =>{
        await page.goto(environment.baseUrl);

        const loginPage = new LoginPage(page);

        const dashboardPage = await loginPage.loginAsAdmin(
            environment.adminUser.username,
            environment.adminUser.password
        );

        await dashboardPage.verifyLoaded();

        await use(dashboardPage);
    }
});

export {expect} from '@playwright/test';