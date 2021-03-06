import Head from 'next/head'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const isBrowser = () => typeof window !== "undefined"

export default function Home() {

  const [name, setName] = useState("")
  const [wst, setWST] = useState("")

  useEffect(()=>{
    if (isBrowser()) {
      setName(Cookies.get("name"))
      setWST(window.sessionStorage.getItem("windowSessionTest"))
    }
  }, [])

  const setCookie = () => {
    Cookies.set('name', 'John Doe', {sameSite: 'None', secure: true})
    window.sessionStorage.setItem("windowSessionTest", "123")

    updateName()
  }

  const unSetCookie = () => {
    Cookies.remove('name', {sameSite: 'None', secure: true})
    window.sessionStorage.removeItem("windowSessionTest");

    updateName()
  }

  const updateName = () => {
    if (isBrowser()) {
      setName(Cookies.get("name"))
      setWST(window.sessionStorage.getItem("windowSessionTest"))
    }
  }



  return (
    <div>
      Name: {name}<br />
      Window Session Test: {wst}<br />
      <button onClick={setCookie}>Set Cookie</button><br />
      <button onClick={unSetCookie}>Unset Cookie</button><br />
      <Link href="/test">Go to Custom Page</Link>
      <Link href="/page-test">Go to Page Test</Link>
    </div>
  )
}
