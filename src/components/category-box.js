import React from 'react'

import {CategoryItem} from './'

var jp = require('jsonpath');

export default class CategoryBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {CategoryName, dataBase} = this.props;
    const ArrayOfItems = jp.query(dataBase, '$..fundRanges[?(@.category== "' + CategoryName + '" )]');

    return (
        <div className="CategoryContainer">
          <h2 className="CategoryHeader" >
            {CategoryName}
          </h2>
          {ArrayOfItems.map((item, index)=>
            <CategoryItem 
              key={index}
              item={item}
            />
            )
          }
        </div>      
    )
  }
}