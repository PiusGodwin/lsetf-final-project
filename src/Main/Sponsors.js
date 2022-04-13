import React from 'react'
import styled from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";
import Icon from '../Main/image/loftyinc.png'
import Photo from '../Main/image/aa.png'
import Photo2 from '../Main/image/iii.png'
import Photo3 from '../Main/image/nn.png'
import Photo4 from '../Main/image/ww.png'
import Icon2 from '../Main/image/usadf-removebg-preview.png'
import Icon3 from '../img/ws.png';
import Icon4 from '../img/fb.png';
import Icon5 from '../img/lk.png'
import Icon6 from '../Main/image/tt.png';
import Icon7 from '../Main/image/lsetf.png'
import Icon8 from '../Main/image/photo.png'
const Sponsors = () => {

    React.useEffect(()=>{
        Aos.init()
    },[]);

  return (    
    <MainContain>
        <Wrapper>
            <Card1 data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <Title>Sponsor</Title>
                <Logo></Logo>
                <Desc>LoftInc Allied Partners Ltd</Desc>
                <Hr/>
                <Feedback >
                    <ul >
                        <th>Services</th>
                        <Li>Market Entry, Project Development, Business Expansion Strategy</Li>
                        <Li>Digital Transformayion & Product Development</Li>
                        <Li>Product Delivery</Li>
                        <Li>Capital Management</Li>
                        <Li>Business Development & Business Advisory</Li>
                        <Li>Venture Development</Li>
                        <Li>Public Sector Advisory Practice</Li>
                    </ul>
                </Feedback>
                <Span>
                <Footer></Footer>
                <Footer2></Footer2>
                <Footer3></Footer3>
                <Footer4></Footer4>
                </Span>
            </Card1>

            <Card2 data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <Title2>Sponsor</Title2>
                <Logo2></Logo2>
                <Desc2 style={{color:"red"}}>United State African Development Foundation</Desc2>
                <Hr2/>
                <Feedback >
                    <ul >
                        <th>Impact</th>
                        <Li2>USADF invests in Africans and their ideas and solutions to address some of 
                            Africa’s biggest challenges around food insecurity, insufficient energy access, 
                            and unemployment, particularly among women and youth.</Li2>
                        <Li2>USADF does development differently by utilizing a community-led development 
                            approach and a pan-African network of local implementing partners to support 
                            African-designed and African-delivered solutions. USADF provides grant capital, 
                            capacity building assistance, and convening opportunities to develop, 
                            grow and scale African enterprises and entrepreneurs who improve lives and livelihoods.</Li2>
                                                
                    </ul>
                </Feedback>

                <Span>
                <Footer8></Footer8>
                <Footer5></Footer5>
                <Footer6></Footer6>
                <Footer7></Footer7>
                </Span>
            </Card2>

            <Card1 data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <Title>Sponsor</Title>
                <Logol></Logol>
                <Desc style={{fontSize:"16px"}}>Lagos State Employability Trust Fund</Desc>
                <Hr/>
                <Feedback >
                    <ul >
                        <th>Core Values</th>
                        <Li>Employability</Li>
                        <Li>Starting Your Business</Li>
                        <Li>Managing Your Business</Li>
                        <Li>Capital Management</Li>
                        <Li>Key Macro-Economic Highlights Report</Li>
                        <Li>Government Contracting</Li>
                        <Li>Lagos Innovations</Li>
                    </ul>
                </Feedback>
                <Span>
                <Footer></Footer>
                <Footer2></Footer2>
                <Footer3></Footer3>
                <Footer4></Footer4>
                </Span>
            </Card1>

        </Wrapper>

    </MainContain>
  
  )
}

export default Sponsors

const MainContain = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

@media screen and  (max-width: 480px) {
    body {        
        width:100%
    }
}
 

@media screen and (min-width: 1025px) {
    body {
      width:100%
    }
}
`

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 55px;
`

const Card1 = styled.div`
    height: 400px;
    width: 350px;
    background-color: #0A325A;
    color: white;
    box-shadow: 0 0 28px 4px rgba(0,0,0,0.1);
    transition: transform .3s ease;
    cursor: pointer;
    text-align: center;
`
const Card2 = styled.div`
    height: 400px;
    width: 350px;
    background-color: wheat;
    box-shadow: 0 0 28px 4px rgba(0,0,0,0.1);
    transition: transform .3s ease;
    cursor: pointer;
    text-align: center;
`
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    
`
const Title2 = styled.h1`
    font-size: 24px;
    text-align: center;
    color: #E2AB41;
`
const Desc = styled.h2`
    font-size: 8px;
    text-align: center;
    color: #E2AB41;
    
`
const Desc2 = styled.h2`
    font-size: 12px;
    text-align: center;
    color:black;
`

const Feedback = styled.div`
    /* text-align: center; */
    text-align: left;
`
const Logo = styled.img`
    background-image: url('${Icon}');
    background-size: cover;
    border-radius: 50%;
    width: 70px;
    height: 60px;
`
const Logo2 = styled.img`
    background-image: url('${Icon2}');
    background-size: cover;
    border-radius: 50%;
    width: 70px;
    height: 60px;
`
const Logol = styled.img`
    background-image: url('${Icon8}');
    background-size: cover;
    border-radius: 50%;
    width: 70px;
    height: 60px;
`
const Li = styled.li`
    list-style-type: square;
    font-style: italic;
    font-size: 12px;
`
const Li2 = styled.li`
    list-style-type: square;
    font-style: italic;
    font-size: 10px;
`
const Hr = styled.hr`
    width: 100px;
    height: 5px;
    background-color: white;

`
const Hr2 = styled.hr`
    width: 100%;
    height: 5px;
    outline: none;
    background-color: #E2AB41;

`
const Footer = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Photo});  
  background-size: cover;
  margin-top: 10px;
`
const Footer2 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Photo2});  
  background-size: cover;
  margin-top: 10px;

`
const Footer3 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Photo3});  
  background-size: cover;
  margin-top: 10px;
`
const Footer4 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Photo4});  
  background-size: cover;
  margin-top: 10px;
`
const Footer8 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon6});  
  background-size: cover;
  margin-top: 10px;
`
const Footer5 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon5});  
  background-size: cover;
  margin-top: 10px;

`
const Footer6 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon4});  
  background-size: cover;
  margin-top: 10px;
`
const Footer7 = styled.img`
  width: 30px;
  height:30px;
  border-radius: 50%;   
  background-image: url(${Icon3});  
  background-size: cover;
  margin-top: 10px;
`
const Span = styled.span`
    display: flex;
    justify-content: space-around;
    background-color: white;
        
`