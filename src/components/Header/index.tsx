import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles'; 

const Header = () => {
    return(
        <Container>
            <Content>
                <h1>Healthy Food</h1>
                <ul>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN</li>
                    <Link to="/register">
                        <li>REGISTER</li>
                    </Link>
                </ul>   
            </Content> 
        </Container>
    );
}

export default Header;