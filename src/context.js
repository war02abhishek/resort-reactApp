import React, {useContext, useState} from 'react'
import { useEffect } from 'react';
import items from './data'//we can use any name insted of item
const RoomContext = React.createContext();
// Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

//data ko kis taraha handle karna hai that will be told by context.js

let temp = {
        rooms: [],//store all info of rooms
        sortedRooms: [],//
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

const RoomProvider = ({children}) => {
    //useSetState
    const [state, setState] = useState(temp);
    
    const formatData = (items) => {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((image) => image.fields.file.url)
            let room = {...item.fields, images, id};
            return room;
        })
        return tempItems;
    }
//getDATA 
//this.getData
    const componentDidMount = (items) => {
        let rooms = formatData(items);
        console.log(rooms);
        
        let featuredRooms = rooms.filter(room => room.featured === true);
        //max price jo hai 3000 vo hm hmare data se calc kar rahe hai
        let maxPrice = Math.max(...rooms.map(item => item.price));
        //similar to size
        let maxSize =   Math.max(...rooms.map(item => item.size));

        //set maxprice and maxsize
        setState({...state, rooms, featuredRooms, sortedRooms: rooms, loading: false, 
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }
    useEffect(() => {
        console.log("YO I'm called")
        componentDidMount(items);
    }, []);
    const getRoom = (slug) => {
        let tempRoom = [...state.rooms];
        const room = tempRoom.find((room)=> room.slug === slug);
        return room;
    }
    const handleChange = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        // console.log(state); or console.log(type,name,value)
        let tempState = state;
        tempState[name] = value;
        setState(tempState);
        // console.log(tempState);
        console.log(state);
        filterRooms();
    }
    const filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = state;
        //capacity from form is in string
        capacity = parseInt(capacity);
        price = parseInt(price);
        let tempRooms = [...rooms];
        //type filter
        if(type !== 'all') {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }
        //capacity filter
        tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        //price filter
        tempRooms = tempRooms.filter((room) => room.price <= price);
        tempRooms = tempRooms.filter((room) => 
            room.size >= minSize && room.size <= maxSize);
        //breakfast filter
        if(breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }
        // pets filter 
        if(pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }
        setState({...state, sortedRooms: tempRooms});
    }
    return <RoomContext.Provider
                value = {{...state,getRoom,handleChange}}
            >
            {children}
        </RoomContext.Provider>
} 
// “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level

//const context=useContext(RoomContext)  ye har baar karna padta tha before useGlobalContext

export default function useGlobalContext() {
    return useContext(RoomContext);//
}
export {RoomProvider, RoomContext};
