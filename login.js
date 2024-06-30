// login.js
export function login(username, password) {
    
    const mockUser = {
        username: 'user',
        password: 'pass123'
    };

    if (username === mockUser.username && password === mockUser.password) {
        return { status: 'success', message: 'Login successful' };
    } else {
        return { status: 'failure', message: 'Invalid username or password' };
    }
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}