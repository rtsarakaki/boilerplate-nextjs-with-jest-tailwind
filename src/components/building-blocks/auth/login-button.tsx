'use client'

import { Button } from '@/components/ui/button'
import { TbLogin2 } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

type componentProps = {
  text?: string
  provider: 'github' | 'google' | 'custom'
  callbackUrl: string
}

function getButtonProps(provider: string, text?: string) {
  switch (provider) {
    case 'github':
      return {
        icon: <FaGithub />,
        style: 'bg-black text-white',
        text: text || 'Login with Github'
      }
    case 'google':
      return {
        icon: <FcGoogle />,
        style: 'bg-white text-black',
        text: text || 'Login with Google'
      }
    default:
      return {
        icon: <TbLogin2 />,
        style: 'bg-primary text-white',
        text: text || 'Login with Credentials'
      }
  }
}

export default function LoginButton(props: componentProps) {
  const { icon, style, text } = getButtonProps(props.provider, props.text)

  return (
    <Button
      className={`gap-2 ${style}`}
      onClick={() => signIn(props.provider, { callbackUrl: props.callbackUrl })}
    >
      {icon}
      {text}
    </Button>
  )
}
