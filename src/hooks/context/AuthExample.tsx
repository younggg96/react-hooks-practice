import { AuthProvider, useAuth } from './AuthContext';

function LoginForm() {
  const { user, login } = useAuth();
  return (
    <div>
      <h2>Auth Example</h2>
      {user ? (
        <p>Welcome, {user}!</p>
      ) : (
        <button onClick={() => login('ReactDev')}>Login</button>
      )}
    </div>
  );
}

export default function AuthExample() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}