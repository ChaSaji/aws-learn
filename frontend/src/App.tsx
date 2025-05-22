import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "6853gvj2etkjscvolje3mnrifc";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://ap-northeast-1govy1nd3f.auth.ap-northeast-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }
  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');
  async function getData(): Promise<{ message: string } | undefined> {
    const url = 'http://127.0.0.1:8000/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`レスポンスステータス: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`エラー: ${error.message}`);
      } else {
        console.error('不明なエラーが発生しました。');
      }
      return undefined;
    }
  }

  useEffect(() => {
    (async () => {
      /* 第1引数には実行させたい副作用関数を記述*/
      const res = await getData();
      // res.message が undefined でなければ setMessage する
      if (res && res.message !== undefined) {
        setMessage(res.message as string);
      }
    })();
  }, []); // 第2引数には副作用関数の実行タイミングを制御する依存データを記述

  return (
    <>
      <div>
        <button onClick={() => auth.signinRedirect()}>Sign in</button>
        <button onClick={() => signOutRedirect()}>Sign out</button>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React aiueo !!!</h1>
      <h2>{message}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
