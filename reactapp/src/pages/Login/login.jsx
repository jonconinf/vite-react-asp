import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['session']);

    const handleLogin = () => {
        // Verify credentials. E.g: do a network request
        // In this case we are hardcoding the credentials.
        if (email === 'email@example.com' && password === 'password') {
            // Store the session cookie in the browser.
            //
            // It is not recomended to store sessions cookies or any other sensitive information in the `localStorage`. 
            // It is possible to do Cross-Site-Scripting (XSS) to the `localStorage`.
            // Another option would be to store the session in the `sessionStorage`. This storage is removed when the browser is closed.
            // `Cookies` are not accesible via JS.
            setCookie('session', 'email@example.com', { path: '/' });
            // Navigate to articles 
            navigate('/articles');
        } else {
            // Show an alert if authentication fails
            alert('Wrong credentials.');
        }
    };

    // TODO: add styles
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <a type="button" href="/register">
                    Create a new account
                </a>
            </form>
        </div>
    );
};

export default Login;
