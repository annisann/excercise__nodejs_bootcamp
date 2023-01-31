import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Inter } from "@next/font/google";

type LayoutProps = {
    children: React.ReactNode
}
const inter = Inter({ subsets: ['latin'] })
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Nav />
            <section className={`${inter.className}`}>
                {children}
            </section>
            <Footer />
        </>
    )
}