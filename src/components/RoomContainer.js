import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomList'
import useGlobalContext from '../context'
import Loading from './Loading'
export default function RoomContainer() {
    const {loading, sortedRooms, rooms} = useGlobalContext();
    console.log(sortedRooms);
    console.log(rooms);
    if(loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms = {rooms}/>
            <RoomsList rooms = {sortedRooms}/>
        </>
    )
}
