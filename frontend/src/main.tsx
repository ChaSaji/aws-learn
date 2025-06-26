import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from 'react-oidc-context';
import { RouterProvider } from 'react-router';
import router from './routes.tsx';

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
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
