import React from 'react';

const Item = (props) => {
    const { item } = props;
    
    return (
        <div class="row item-box">
            <div class="item-img">
                <img src={item.image_url}/>
            </div>
            <div class="item-name">{item.name}</div>
        </div>
    )
}

export default Item;