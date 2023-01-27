import Link from "next/link";

export default function Nav(){
    return (
        <nav>
            <Link href='/'> <a> home </a> </Link>
            <Link href='/about'> <a> about </a> </Link>
            <Link href='/login'> <a> login </a> </Link>
        </nav>
    )
}