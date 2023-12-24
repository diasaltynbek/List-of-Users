import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="https://raw.githubusercontent.com/Archakov06/react-beginner-projects/8adf80464e1ee4b084592b47c432cf1f9a864981/public/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};