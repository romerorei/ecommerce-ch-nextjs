'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }:any) {

    useEffect(() => {
        console.error(error)
    }, [error])
console.log("Page re rendered")
    return (
        <div className="container m-auto my-5 p-5 w-1/2 bg-bg-color-5 rounded-md text-center">
            <h2 className="m-auto py-12 text-2xl font-semibold text-purple-900"> Oops! Something went wrong. PLease try refreshing your product detail page</h2>
            <button onClick={() => reset()}>Refresh</button>
        </div>
    )
}
