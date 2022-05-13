import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomContainer'
export default function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title = "Our rooms">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
}
