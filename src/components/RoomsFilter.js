import React, {useEffect} from 'react'
import useGlobalContext from '../context'
import Title from './Title'

const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
  
    const { state, handleChange, type, capacity, price, 
            minPrice, maxPrice, minSize, 
            maxSize, breakfast, pets } = useGlobalContext();
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    }) 
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key = {index}>
            {item}
        </option>
    })
    return (
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
                {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">Room type</label>
                        <select className="form-control" name="type" id="type" value={type} 
                            onChange={handleChange}>
                            {/* option values */}
                            {types}
                        </select>
                    </div>
                {/* select ended */}
                {/* guests */}
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <select className="form-control" name="capacity" id="capacity" value={capacity} 
                            onChange={handleChange}>
                            {/* option values */}
                            {people}
                        </select>
                    </div>
                {/* guests */}
                {/* price  */}
                    <div className="form-group">
                        <label htmlFor="price">Room Price: ${price}</label>
                        <input type="range" name="price" 
                            min={minPrice} max={maxPrice} id="price" value={price}
                            onChange={handleChange} className="form-control"/>
                    </div>
                {/* endPrice  */}
                {/* size  */}
                    <div className="form-group">
                        <label htmlFor="">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" 
                                value={minSize} id="size" onChange={handleChange} 
                                className="size-input"/>
                            <input type="number" name="maxSize" 
                                value={maxSize}  onChange={handleChange} 
                                className="size-input"/>
                        </div>
                    </div>
                {/* endSize */}
                {/* extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" 
                                id="breakfast" checked={breakfast}
                                onChange={handleChange}/>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" 
                                id="pets" checked={pets}
                                onChange={handleChange}/>
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                {/* endOfExtras */}
            </form>
        </section>
    )
}
