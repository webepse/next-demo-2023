"use client"
import { useEffect } from "react"

export default function HomePage() {
    useEffect(() => {
        window.alert("Bienvenue sur mon site")
    })

    console.log("HomePage [Reading]")

    return (
        <>
            <h1>My Games</h1>
            <p>
                Onlye the best games, reviewed for you.
            </p>
        
        </>
    )
}