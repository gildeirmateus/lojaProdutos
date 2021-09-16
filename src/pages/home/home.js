import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/heading';
import ProductList from '../../components/productList';


function Home (){
    return(
        <>
            <Heading/>
            <ProductList/>
           
            <Link to="/">Sair</Link>
        
        </>
    )
}

export default Home;