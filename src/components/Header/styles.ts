import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height:100px;
z-index: 10;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;

  h1{
    margin-left:130px;
    color: #badc58 !important;
  }

  ul{
    align-items: center;
    width: 55%;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    margin-right:130px;
  }

  ul li{
    display: inline-block;
    margin-left: 25px; 
    color:#fff;
  }

  a {
    text-decoration: none;
    height: 50%;
  }

  li:last-child{
    background: white;
    width: 110px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:4px;
    color:#badc58;
    cursor:pointer;
  }

  @media(max-width: 1260px){
    h1{
      margin-left:80px;
    }
    ul{
      margin-right:60px;
    }
  }
  @media(max-width:990px){
    h1{
      margin-left:25px;
    }
    ul{
      margin-right:25px;
    }
    ul li{
      color:#badc58;
    }
  }
  @media(max-width:750px){
    h1{
      font-size:24px !important;
    }
    ul{
      margin-right:5px;
    }
  }
  @media(max-width:485px){
     h1{
      font-size:16px !important;
      margin-left:10px !important;
    }
    li{
      font-size:10px;
      margin-left:0px !important;
    }
  }
`;

