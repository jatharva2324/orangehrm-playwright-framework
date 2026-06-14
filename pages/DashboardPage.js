import { expect } from "@playwright/test";
import { Sidebar } from "../components/Sidebar";

export class DashboardPage{
    constructor(page){
        this.page = page;
        this.sidebar = new Sidebar(page);

        this.dashboardHeader = page.getByRole('heading',{
            name: 'Dashboard'
        });
    }

    async verifyLoaded(){
        await expect(this.dashboardHeader).toBeVisible();
    }
}