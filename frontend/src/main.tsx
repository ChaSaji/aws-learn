import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Blogs from './pages/Blogs.tsx';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority:
    'https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_gOVy1Nd3f',
  client_id: '6853gvj2etkjscvolje3mnrifc',
  redirect_uri: 'http://localhost:5173',
  response_type: 'code',
  scope: 'email openid phone',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
