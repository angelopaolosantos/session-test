import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const isBrowser = () => typeof window !== "undefined"

const Page = () => {

    const [name, setName] = useState("")
    const [wst, setWST] = useState("")

    useEffect(()=>{
        if (isBrowser()) {
          setName(Cookies.get("name"))
          setWST(window.sessionStorage.getItem("windowSessionTest"))
        }
      }, [])

    return (
        <div>
            Name: {name}<br />
            Window Session Test: {wst}<br />
            <Link href="/">Back to Home</Link>
        </div>
    )
}

export default Page