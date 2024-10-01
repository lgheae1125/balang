import React from "react";

function LogIn() {
  return (
    <div>
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
            placeholder="8글자 이상 작성해주세요."
          />
        </div>

        <button className="mt-5 w-full border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white hover:-translate-y-1 active:translate-y-0">
          회원가입하기
        </button>
      </section>
    </div>
  );
}

export default LogIn;
