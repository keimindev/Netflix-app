import { PlayArrow ,  Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './listitem.scss'

const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
        className="list-item" 
        style={ { left : isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={ () => setIsHovered(true)} 
        onMouseLeave={ () => setIsHovered(false)}
        >
        <img src={item.img} alt="poster" />
        {isHovered &&  (
        <>
        <video src={item.trailer} autoPlay={true} loop preload={true} />
        <div className="item-info">
            <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
            </div>
            <div className="item-info--top">
                <span>1 hour 14 mings</span>
                <span className="limit"> +16</span>
                <span>2019</span>
            </div>
            <div className="desc">
            A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some ...                
            </div>
            <div className="genre">Action</div>
        </div></>
        )}
        </div>
    )
}

export default ListItem
