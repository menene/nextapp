import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Products
                    </Link>
                </li>
            </ul>
        </nav>
    );
}