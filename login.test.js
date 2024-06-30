// login.test.js
import { it, test, expect } from 'vitest';
import { login, isValidEmail } from './login';

it('should return success message for valid credentials', () => {
    // Arrange
    const username = 'user';
    const password = 'pass123';

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toEqual({ status: 'success', message: 'Login successful' });
});

it('should return failure message for invalid username', () => {
    // Arrange
    const username = 'wronguser';
    const password = 'pass123';

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toEqual({ status: 'failure', message: 'Invalid username or password' });
});

it('should return failure message for invalid password', () => {
    // Arrange
    const username = 'user';
    const password = 'wrongpass';

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toEqual({ status: 'failure', message: 'Invalid username or password' });
});

it('should return failure message for empty username and password', () => {
    // Arrange
    const username = '';
    const password = '';

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toEqual({ status: 'failure', message: 'Invalid username or password' });
});

it('should return failure message for null username and password', () => {
    // Arrange
    const username = null;
    const password = null;

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toEqual({ status: 'failure', message: 'Invalid username or password' });
});

it('should validate email format', () => {
    // Valid email
    expect(isValidEmail('user@example.com')).toBe(true);

    // // Invalid email - missing domain
    expect(isValidEmail('user@')).toBe(false);

    // // Invalid email - missing '@'
    // expect(isValidEmail('userexample.com')).toBe(false);

    // // Invalid email - missing username
    // expect(isValidEmail('@example.com')).toBe(false);

    // // Invalid email - special characters
    // expect(isValidEmail('user!@example.com')).toBe(false);
});