import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import axios from 'axios';
import ItemCard from './ItemCard';

const Shop = ({ searchTerm }) => {

    // Hooks let you "hook" into states in a simple way
    const [items, setItems] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setItems(response.data)
                setFiltered(response.data)
            })
    }, []);

    useEffect(() => {
        if (items && searchTerm) {
            setFiltered(
                items.filter(item =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFiltered(items)
        }
    }, [searchTerm, items])

    return (

        <Grid container spacing = {2} direction= "row">
            { filtered.map(item => 
                <Grid item xs={6} sm={4} lg = {2} >
                    <ItemCard item = {item} key = {item.id}/>
                </Grid>
            )}
        </Grid>
     
    )
}

export default Shop;