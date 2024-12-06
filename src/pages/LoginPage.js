import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mật khẩu" />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginPage;
