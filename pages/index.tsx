import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Test = dynamic(()=> import('next2/Test'))
  const css = []
  function addCss(cssStr: string) {
    css.push(cssStr)
    console.log('css', css)
  }
  return (
    <>
      <main>
        <Test addCss={addCss}></Test>
      </main>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {css.join(' ')}
        </style>
      </Head>
    </>
  )
}
