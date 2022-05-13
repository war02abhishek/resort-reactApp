import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
//similar to title here we  are creating for Room
export default function Room({room}) {
    const {name, slug, images, price} = room;//room as a an input to us
    return (
        <>
            <article className = "room">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="singleImg" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to ={`/rooms/${slug}`} className="btn-primary room-link">
                        Features
                    </Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
        </>
    )
}
Room.propTypes = {
    room : PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.number.isRequired,
    })
};