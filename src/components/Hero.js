import React from 'react'

export default function Hero({hero="defaultHero" ,children}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
