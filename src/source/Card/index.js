import React from 'react';
import styled from 'styled-components'



export default function Card ({ product }) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <p>{product.id}</p>
                        <p>{product.name}</p>
                        <p>R${(product.price).toFixed(2)}</p>
                        {product.flavor ? <p>{product.flavor}</p> : null}
                    </li>
                </ul>
            </div>
        </>
    )
}