import { test, expect } from '@playwright/test';
import { apiDataPost , apiDataPatch } from '../data/testData';

test.describe('Api project', () => {
  test('Get post', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
  });

  test('Patch post', async ({ request }) => {
    const updateData = {
        title: 'Hello AQA'
    }


    const response = await request.patch('/posts/1', {
      data: updateData,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.title).toBe('Hello AQA');
    console.log(body);
  });
});