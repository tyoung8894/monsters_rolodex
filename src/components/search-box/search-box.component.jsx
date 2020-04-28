import React from 'react';
import './search-box.styles.css';

//functional components, unlike class components do not have access to state since they do not have
//access to constructor which is a class method on our component we import from React
//that we extend our class from

//also do not have access to lifecycle methods 
//use when we only want to render html, not use lifecycle or state

//functional component is a component that takes in props and returns html
//easier to read,test

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
);
