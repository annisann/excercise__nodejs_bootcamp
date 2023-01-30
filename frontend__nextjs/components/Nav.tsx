import Link from "next/link";

export default function Nav(){
    return (
        <nav className="text-center">
            <Link href='/'> home </Link>
            <Link href='/about'> about </Link>
            <Link href='/login'> login  </Link>
            <Link href='/region'> regions </Link>
        </nav>
    )
}