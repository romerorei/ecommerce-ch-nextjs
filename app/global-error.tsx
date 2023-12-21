'use client'

export default function GlobalError({ error, reset }:any) {
return (
    <html>
        <body>
            <h2>Oops! Something went wrong. PLease try refreshing the page</h2>
            <button onClick={() => reset()}>Refresh</button>
        </body>
    </html>
)
}
