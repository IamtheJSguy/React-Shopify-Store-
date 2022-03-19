import React from 'react';
import { Button, Link } from "@mui/material";
import DropDown from '../atoms/DropDown';

const HomePageList = () => {
    let list = [
        {title:'Categories'},
        {title:'Ready to ship'},
        {title:'Wishlist'},
        {title:'Services & Help'},
        {title:'Blogs'},
    ]
    return ( 
        <ul style={{display:'flex',listStyle:'none'}}>
        <li>
          <DropDown title={list[0].title} />
        </li>
     
        <li>
        <Button onClick={()=>{
                window.location.href = "/wishlist"
            }}
            >Wishlist</Button>
        </li>
        <li>
            <Button onClick={()=>{
                window.location.href = "/services"
            }}>Services & Help</Button>
        </li>
        <li>
            <a style={{textDecoration:'none'}} href="/blog">
            <Button>Blogs</Button>
            </a>
        </li>
        <li>
            <Button onClick={()=>{
                window.location.href = "/category/discount"
            }}>Deals and Promotions</Button>
        </li>
        <li>
            <Button onClick={()=>{
                window.location.href = "/category/exclusive_products"
            }}>Exclusive Products</Button>
        </li>
  
    </ul>
     );
}
 
export default HomePageList;