import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900">
        <div className="container flex flex-col items-center justify-center gap-4 py-8 text-center">
            <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Flutcn UI. All rights reserved.

            </p>

        </div>
    </footer>
  )
}

export default Footer