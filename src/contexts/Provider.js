import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function Provider({children}){
    const [searchBox, setSearchBox] = useState(false);

    const handleSearchBox = () => {
        if(searchBox){
          setSearchBox(false);
          } else {
          setSearchBox(true)
          }
      }

    const mainValue ={
        searchBox,
        setSearchBox,
        handleSearchBox,
    }
    return(
        <Context.Provider value={ mainValue}>
            { children }
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  