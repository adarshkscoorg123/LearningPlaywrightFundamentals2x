import { test, expect } from '@playwright/test';

test("Verify the locators for Herokuapp make appointment flow.", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //a[@id="btn-make-appointment"]

    let makeAppointmentBtn = page.locator("//a[@id='btn-make-appointment']");
    await makeAppointmentBtn.click();

    //Username Password
    let userName = page.locator("//input[@id='txt-username']");
    await userName.fill("John Doe");

    let passWord = page.locator("//input[@id = 'txt-password']");
    await passWord.fill("ThisIsNotAPassword");

    let loginBtn = page.locator("//button[text()='Login']");
    await loginBtn.click();
    //await page.pause();

    let facility = page.locator("//select[@id = 'combo_facility']");
    await facility.selectOption('Seoul CURA Healthcare Center'); // selecting by visible text from dropdown
    // await facility.selectOption({ index: 1 }); //Another way to select the dropdown

    let chekboxReadmission = page.locator("//input[@id = 'chk_hospotal_readmission']");
    await chekboxReadmission.check();

    let medicaidRadio = page.locator("//input[@id = 'radio_program_medicaid']");
    await medicaidRadio.check();

    let visitDate = page.locator("//input[@id ='txt_visit_date']");
    await visitDate.fill('18/07/2026');

    let comment = page.locator("//textarea[@id ='txt_comment']");
    await comment.fill('I am booking appointment for myself');
    await page.pause();

    let bookAppointmentBtn = page.locator("//button[@id ='btn-book-appointment']");
    await bookAppointmentBtn.click();
    await page.pause();

});