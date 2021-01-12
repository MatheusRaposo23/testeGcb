import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {FiSearch} from 'react-icons/fi'

import comida1 from '../../assets/comida_1.svg';
import comida2 from '../../assets/comida_2.svg';
import comida3 from '../../assets/comida_3.svg';
import comida4 from '../../assets/comida_4.svg';

import blog1 from '../../assets/blog_image_1.svg';
import blog2 from '../../assets/bloco_image_2.svg';
import blog3 from '../../assets/bloco_image_3.svg';
import blog4 from '../../assets/bloco_image_4.svg';

import author1 from '../../assets/author1.svg';
import author2 from '../../assets/author2.svg';
import author3 from '../../assets/author3.svg';
import author4 from '../../assets/author4.svg';

import { Container} from './styles'; 
import Button from '../../components/Button';

const Home = () => {
    return(
        <Container>
            {/* <Header/> */}
            <section className="section1">
                <Header />
                <div className="section1Content">
                    <h1>Ready for Trying a new recipe?</h1>
                    <div className="btnC">
                        <Input placeholder="Search healthy recipes" name="nome"/>
                        <button> 
                            <FiSearch color="#fff"/>
                        </button>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="section2Content">
                    <h1>Our Best Recipes</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="cardContainer">
                        <div className="card">
                            <img src={comida1} alt=""/>
                            <div className="asideContent">
                                <h1>Brocolli Salad with Bacon</h1>
                                <Button buttonName="See Recipe" />
                            </div>
                        </div>

                        <div className="card">
                            <img src={comida2} alt=""/>
                            <div className="asideContent">
                                <h1>Classic Beef Burgers</h1>
                                <Button buttonName="See Recipe" />
                            </div>
                        </div>

                        <div className="card">
                            <img src={comida3} alt=""/>
                            <div className="asideContent">
                                <h1>Classic Potato Salad</h1>
                                <Button buttonName="See Recipe" />
                            </div>
                        </div>

                        <div className="card">
                            <img src={comida4} alt=""/>
                            <div className="asideContent">
                                <h1>Cherry Cobbler on the Grill</h1>
                                <Button buttonName="See Recipe" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="section3Content">
                <h1>The best services ready To serve you</h1>
                <p>Far far away , behind the word mountains , far from the countries Vakalia and Consonantia, there live the blind texts.</p>
                <p>Separated they live in Bookmarksgrave right at the coast of the semantics,  a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelatia.</p>
                <Button buttonName="Know More" />
                </div>
            </section>

            <section className="section4">
                <div className="section4Content">
                    <h1>Read Our Blog</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="cardContainer">
                        <div className="card">
                            <img src={blog1} alt=""/>
                            <div className="asideContent">
                                <h1>Quick-start guide to nuts and seeds</h1>
                                <div className="author">
                                    <img src={author1} alt=""/>
                                    <p>Kevin Ibrahim</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={blog2} alt=""/>
                            <div className="asideContent">
                                <h1>Nutrition: Tips for Improving Your Health</h1>
                                <div className="author">
                                    <img src={author2} alt=""/>
                                    <p>Mike Jackson</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={blog3} alt=""/>
                            <div className="asideContent">
                                <h1>The top 10 benefits of eating healthy</h1>
                                <div className="author">
                                    <img src={author3} alt=""/>
                                    <p>Bryan McGregor</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={blog4} alt=""/>
                            <div className="asideContent">
                                <h1>What Makes a Healthy Diet?</h1>
                                <div className="author">
                                    <img src={author4} alt=""/>
                                    <p>Jorge Joshua</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section5">
                <div className="section5Content">
                <h1>Join our membership to get special offer</h1>
                    <div className="btnC">
                        <Input placeholder="Enter your e-mail address" name="nome"/>
                        <Button buttonName="Join" className="joinButton"/>
                    </div>
                </div>
            </section>
            <footer>
                <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </footer>
        </Container>
    );
}

export default Home;