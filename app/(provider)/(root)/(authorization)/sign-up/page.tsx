"use client";
import React, { useRef } from "react";
import Page from "../../_components/Page";
import { useRouter } from "next/navigation";
import { signUpAPIs } from "@/api/authorization/signUp";
import { useAuthStore } from "@/zustand/store";

function SignUpPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const logIn = useAuthStore((state) => state.logIn);

  const handleClickSignUpButton = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const passwordConfirm = passwordConfirmRef.current!.value;

    if (!email) return alert("이메일을 입력해주세요.");
    if (!email.includes("@")) return alert("이메일에 @를 입력해주세요.");
    if (!email.includes(".")) return alert("이메일에 .을 입력해주세요.");

    if (!password) return alert("비밀번호를 입력해주세요.");
    if (password.length < 8) return alert("비밍번호를 8글자 이상 입력해주세요");
    if (!passwordConfirm) return alert("비밀번호 확인을 입력해주세요.");

    if (passwordConfirm !== password)
      return alert("비밀번호와 비밀번호 확인이 다릅니다.");

    await signUpAPIs.postSignUp(email, password);

    alert("회원가입 성공");
    logIn();
    router.push("/");
  };

  return (
    <Page>
      <h2 className="font-bold text-3xl text-center my-12">회원가입</h2>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="w-full">
          <label className="text-sm font-medium text-gray-800" htmlFor="email">
            이메일
          </label>
          <input
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            type="email"
            id="email"
            ref={emailRef}
            placeholder='"@", "." 을 포함해서 작성해주세요.'
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
            ref={passwordRef}
            placeholder="8글자 이상 작성해주세요."
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-medium text-gray-800"
            htmlFor="password"
          >
            비밀번호 확인
          </label>
          <input
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            type="password"
            id="password"
            ref={passwordConfirmRef}
          />
        </div>

        <button
          onClick={handleClickSignUpButton}
          className="mt-5 w-full border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white hover:-translate-y-1 active:translate-y-0"
        >
          회원가입하기
        </button>
      </section>
    </Page>
  );
}

export default SignUpPage;
