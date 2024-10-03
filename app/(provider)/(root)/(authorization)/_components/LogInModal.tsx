"use client";
import { logInAPIs } from "@/api/authorization/logIn";
import { useAuthStore, useLogInModalStore } from "@/zustand/store";
import React, { useRef } from "react";

function LogInModal() {
  const isClickedLogInModal = useLogInModalStore(
    (state) => state.isClickedLogInModal
  );
  const setIsClickedLogInModal = useLogInModalStore(
    (state) => state.setIsClickedLogInModal
  );
  const logIn = useAuthStore((state) => state.logIn);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleClickSignUpButton = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    if (!email) return alert("이메일을 입력해주세요.");
    if (!email.includes("@")) return alert("이메일에 @를 입력해주세요.");
    if (!email.includes(".")) return alert("이메일에 .을 입력해주세요.");

    if (!password) return alert("비밀번호를 입력해주세요.");
    if (password.length < 8) return alert("비밍번호를 8글자 이상 입력해주세요");

    await logInAPIs.postLogIn(email, password);
    logIn();
    alert("로그인 성공");
    setIsClickedLogInModal();
  };
  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsClickedLogInModal();
  };
  return isClickedLogInModal ? (
    <div
      onClick={handleClickBackground}
      className="bg-black/50 flex items-center justify-center fixed w-screen h-screen top-0 left-0 z-0"
    >
      <div className="bg-white p-5 rounded-md w-[400px] z-20 fixed">
        <h2 className="font-bold text-3xl text-center my-12">로그인</h2>
        <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
          <div className="w-full">
            <label
              className="text-sm font-medium text-gray-800"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
              type="email"
              id="email"
              placeholder='"@", "." 을 포함해서 작성해주세요.'
              ref={emailRef}
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium text-gray-800"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
              type="password"
              id="password"
              placeholder="8글자 이상 작성해주세요."
              ref={passwordRef}
            />
          </div>

          <button
            onClick={handleClickSignUpButton}
            className="mt-5 w-full border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white hover:-translate-y-1 active:translate-y-0"
          >
            로그인하기
          </button>
        </section>
      </div>
    </div>
  ) : null;
}

export default LogInModal;
