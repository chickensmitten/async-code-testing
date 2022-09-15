import { it, expect, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

// hooks with beforeEach, beforeAll, afterEach, afterAll use for initialization and clean up

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail);
  console.log("beforeAll");
});

beforeEach(() => {
  // user = new User(testEmail);
  console.log("beforeEach");
});

afterEach(() => {
  user = new User(testEmail);
  console.log("afterEach");
});

afterAll(() => {
  console.log("afterAll");
});

// if you use describe.concurrent(), then no need to use concurrent in it

it.concurrent('should update the email', () => {
  
  const newTestEmail = 'test2@test.com';  
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
