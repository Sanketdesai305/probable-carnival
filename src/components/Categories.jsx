import React from 'react'
import {categories}from "../cdata";
import styled from "styled-components";
import CategoriesItem from './CategoriesItem';
import {mobile,mobile1,screen1} from "../responsive";

const Container = styled.div`display:flex;padding:20px;justify-content:space-between;
${mobile({padding:"0px", flexDirection:"column"})};
${mobile1({padding:"0px", flexDirection:"column"})};
${screen1({padding:"0px", display:"flex",flexWrap:"wrap"})};`

function Categories() {
  return (
    <Container>
              {categories.map(item=>
        <CategoriesItem item = {item} key={item.id}/>
        )}
    </Container>
  )
}

export default Categories;