import styled from 'styled-components';

import image from '../../assets/Illustration.svg';
import image3 from '../../assets/bloco_services.svg';
import image5 from '../../assets/bloco_final_image.svg';


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content:center;

  h1 {
    color: #1d164d;
  }

  .btnC{
    display: flex;
    height: 100%;
    margin-top:25px;
    button{
      height:50px;
      width:50px;
      margin-left:10px;
      background: #badc58;
      border: 0;
      border-radius: 5px;
    }
  }

  .section1{
    display: flex;
    align-items: center;
    width:100%;
    height:100vh;
    background-image: url(${image});
    background-size: 57%;
    background-position: 100% 0;
    background-repeat: no-repeat;

    h1 {
      font-size: 48px;
    }
  }
  .section1Content{
    width: 20%;
    margin-left:130px;
    min-width:294px;
  }

  .section2{
    display: flex;
    align-items: center;
    width:100%;
    height:100vh;
    background-color: #fafafc;
  }

  .section2Content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80%;

    .asideContent {
      justify-content: space-around;
    }

    h1 {
      font-size: 32px !important;
    }

    p {
      width: 30%;
      font-size: 16px;
      color: #9e9baf;
      text-align: center;
      margin: 15px 0 40px 0;
    }
  }
  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
    align-self: center;
  }

  .card:nth-child(1) {
    margin: 0 20px 30px 0;
  }

  .card:nth-child(2) {
    margin: 0 20px 30px 0;
  }

  .card:nth-child(3) {
    margin-right: 20px;
  }

  .card {
    display: flex;
    width: 95%;
    height: 261px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 60px #000;
    box-shadow: 0 1px 20px 5px rgba(0,0,0,0.08);

    img {
      width: 67%;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  .asideContent {
    display: flex;
    width: 60%;
    height: 261px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 45px;
  }

  .section3{
    display: flex;
    align-items: center;
    width:100%;
    height:100vh;
    background-image: url(${image3});
    background-size: 57%;
    background-position: 0 100%;
    justify-content: flex-end;
    background-repeat: no-repeat;
  }

  .section3Content{
    width: 25%;
    margin-right:300px;

    > h1 {
      font-size: 32px;
    }

    button{
      color:white;
      width:140px;
      height:50px;
    }

    p{
      margin:20px 0;
      color: #bcbcbc;
      font-size: 16px;
    }

    >.btnC > button{
      margin-left:0;
    }
  }

  .section4{
    display: flex;
    align-items: center;
    width:100%;
    height:100vh;
    background-color: #fafafc;
  }

  .section4Content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80%;

    > h1 {
      margin-bottom: 30px;
      font-size: 32px;
    }

    > p {
      color: #9e9baf;
      font-size: 16px;
      width: 30%;
      text-align: center;
      margin-bottom: 5px;
    }

    > div {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;
    }

    > div > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 348px;
      height: 450px;

      .asideContent {
        justify-content: space-around;
        width: 100%;
        margin-left: 0;
        height: 100%;
      }

      .asideContent > h1 {
        height: 40px;
        padding: 30px 10px 20px 30px;
      }

      .author {
        display: flex;
        margin-top: 50px;
        align-items: center;
      }

      .author > img {
        height: 52px;
        width: 52px;
        border-radius: 50%;
        margin: 0 10px 0 25px;
      }

      h1 {
        width: 100%;
      }

      img {
        width: 100%;
      }
    }
  }

  .section5{
    display: flex;
    align-items: center;
    width:100%;
    height:100vh;
    background-image: url(${image5});
    background-size: 57%;
    background-position: 100% 0;
    background-repeat: no-repeat;
  }

  .section5Content{
    width: 25%;
    margin-left:130px;

    > h1 {
      font-size: 32px;
    }

    button{
      color:white;
      width:120px;
    }
  }

  footer{
    display:flex;
    width:100%;
    justify-content:space-between;
    height:60px;
    align-items:center;
    p{
      margin-left:70px;
      color: #1d164d;
    }
  }

  footer > div {
    display:flex;
    margin-right:70px;
    p{
      color: #bcbcbc;
    }
  }
  

  @media(max-width: 1258px){
    .section1{
      height: 72vh;
    }
  }
  @media(max-width: 1220px){
    .cardContainer{
      grid-template-columns:1fr;
    }
    .card{
      width:99%;
    }
    .section2{
      height:100%;
    }
    .card:nth-child(3){
      margin-bottom:30px;
    }
    .card:nth-child(4){
      margin-bottom:30px;
    }

    .section4Content{
      p{
        width:60%;
      }
    }
  }

  @media(max-width: 1220px) {
    .asideContent {
      h1 {
        font-size: 20px;
      }
    }
  }

  @media(max-width:990px){
    .section1{
      background-image: none;
      justify-content: center;
      h1{
      font-size:32px;
      margin-left:25px;
    }}
    .section3{
      background-image: none;
      justify-content: center;
    }

    .section2Content{
      p{
        width:55%;
      }
    }
     
    
    .section5{
      background-image: none;
      justify-content: center;
      height: 60vh;
    }
      
    .section1Content{
      margin-left:0;
      width:65%;
    }
    .section3Content{
      margin-right:0;
      width:70%;
    }
    .section5Content{
      margin-left:0;
      width:70%;
    }

  @media(max-width:800px){
    footer{
      p{
        margin-left:20px;
      }
      div{
        margin-right:20px;
      }
    }
  }
  
  @media(max-width:750px){
    .section1{
      > h1{
        font-size:24px;
        margin-left:25px;
      }
    }

    .section4{
      height: 80vh;
    }

    .asideContent {
      h1 {
        font-size: 16px;
      }
    }

    .section4Content > div > div {
      height: 300px !important;
    }

    .author > img {
      margin-left: 10px !important;
    }
  }
  }
  @media(max-width:600px){
    .section2{
      height:100%;
    }
    .card{
    flex-direction:column;
    height:100%;
    margin-bottom:20px;
    align-items:center;
    img{
      width:100%;
    }
    }
    .asideContent{
      width:80%;
      margin-left:0;
      align-items:center;
      h1{
        margin-right:0;
        text-align:center;
      }
    }
  }
  @media(max-width:500px){
    .section1{
      .btnC{
        button{
          margin-top:20px;
          width:70px;
        }
      }
    }
    .btnC{
        flex-direction:column;
        align-items:center;
    }
    .btnC div > button{ 
      margin-top:20px;
    }
  }
  
`;