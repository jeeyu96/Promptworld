import '@styles/globals.css';

// define metadata / SEO for application
export const metadata = {
    title : "Promptworld",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">
                </div>
                <main className ="app">
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout