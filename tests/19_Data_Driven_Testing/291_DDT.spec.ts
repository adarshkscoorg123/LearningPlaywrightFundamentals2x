import { test, expect } from '@playwright/test';


//const userData = require('./293_Users.json'); // note: Need to have tsconfig.json file
// otherwise require doesnt work
import userData from "./293_Users.json"; // modern JavaScript

test('Verify Element by Filter', async ({ page }) => {
    console.log(userData.username);
    console.log(userData.password);

    // const fs = require("fs");
    // const fileData = fs.readFileSync("293_Users.json", "utf-8");
    // const user = JSON.parse(fileData);
});
