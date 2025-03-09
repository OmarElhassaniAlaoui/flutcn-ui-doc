import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Omar elhassani alaoui
            </Link>
            . The source code is available on{" "}
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer ; 