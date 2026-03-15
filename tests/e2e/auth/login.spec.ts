import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');

  await page.getByPlaceholder('Email').fill('test@example.com');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/dashboard/);
});
