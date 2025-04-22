import React from 'react';

export function RegisterCompleted({
  message = "¡Registro completado!\nYa puedes iniciar sesión.",
  onClose,
}) {
  
  return (
    <div id="container-modal" className="fixed inset-0 flex w-full items-center justify-center">
      <div
        id="content-text"
        className="relative bg-[#4574FF]/90 text-white rounded-2xl w-[45%] p-[6%] font-bree">
        <p className="text-center text-[2.3rem] whitespace-pre-line">
          {message}
        </p>
        <button
          id="close-modal"
          onClick={onClose}
          className="absolute top-[5%] right-[5%] text-[3.2rem] font-bree text-black cursor-pointer"
          alt="close modal">
          &times;
        </button>
      </div>
    </div>
  );
}

