import Link from "next/link"
import './globals.css'

export default function RootLayout({children}){
    return (
        <html lang="fr">
            <body className="flex flex-col px-4 py-2 min-h-screen bg-orange-50">
                <header>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/reviews">Reviews</Link></li>
                            <li><Link href="/about" prefetch={false}>About</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                 {children}
                </main>
                <footer className="text-center text-xs border-t py-3">
                    footer
                </footer>
            </body>
        </html>
    )
}