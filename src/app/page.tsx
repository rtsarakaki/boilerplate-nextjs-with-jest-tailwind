import React from 'react'
import Header from '@/components/building-blocks/headers/header'
import InputWithLabel from '@/components/building-blocks/inputs/input-with-label'
import LoginButton from '@/components/building-blocks/auth/login-button'

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-slate-100">
        <div className="w-7/12 bg-white p-5 rounded-sm">
          <div className="flex items-center  justify-center  w-full">
            <Header className="pb-5" text="Title" size="3" />
          </div>
          <div className="flex">
            <div className="w-full h-full p-5">
              <Header text="Subtitle" size="2" />
              <p className="mt-5">Description</p>
            </div>
            <div className="border-l w-full h-full p-5">
              <Header text="Login" size="2" />
              <InputWithLabel label="Username" type="text" id="username" />
              <InputWithLabel label="Password" type="password" id="password" />
              <div className="flex justify-end mt-5 w-full">
                <div className="flex flex-col gap-2">
                  <LoginButton provider="custom" callbackUrl="/portal" />
                  <LoginButton provider="github" callbackUrl="/portal" />
                  <LoginButton provider="google" callbackUrl="/portal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
