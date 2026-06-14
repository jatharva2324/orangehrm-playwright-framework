import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import user from '../test-data/user.json';

test('Valid login',async({page})=>{
    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await loginPage.verifyLoginPageLoaded();

    await loginPage.login(user.admin.username,user.admin.password);

    const dashboardPage = new DashboardPage(page);

    await dashboardPage.verifyLoaded();

    const pimPage = await dashboardPage.sidebar.navigateToPIM();

    await pimPage.verifyLoaded();

    
});