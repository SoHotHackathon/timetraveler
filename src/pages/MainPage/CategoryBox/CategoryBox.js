import React from 'react';
import "./CategoryBox.scss"

const CategoryBox = (props) => {
    let CategoryName = props.categoryname;
    return (
        <div className='categorybox'>
            {CategoryName}
        </div>
    );
}

export default CategoryBox;