import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h1>Đăng ký</h1>
      <form>
        <input type="text" placeholder="Tên đầy đủ" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mật khẩu" />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default RegisterPage;
