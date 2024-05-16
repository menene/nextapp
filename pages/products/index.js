import { useState, useEffect } from 'react'
import Link from 'next/link';

import Nav from '../../components/Nav';

export default function Products() {
    const [products, setProduct] = useState([])

    async function getProducts() {
        const listado = await fetch("http://127.0.0.1:3001/products")
        const listado_json = await listado.json()

        setProduct(listado_json)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Nav />
            <h1>Products</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <Link href={`/products/${p.id}`}>
                            {p.name}: <b>${p.price}</b>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}