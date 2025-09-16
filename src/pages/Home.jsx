import React from 'react';
import Hero from '../components/Hero';
import CoffeeCard from './../components/CoffeeCard';
import coffeejourney1 from "../assets/coffeejourney1.jpg";
import coffeejourney2 from "../assets/coffeejourney2.png";
import coffeejourney3 from "../assets/coffeejourney3.jpg";
import MiddleCard from './../components/MiddleCard';
import Text from './../components/Text';
import miniLogo from "../assets/miniLogo.png";
import coffeejourney4 from "../assets/coffeejourney4.png";
import coffeejourney5 from "../assets/coffeejourney5.png";
import coffeejourney6 from "../assets/coffeejourney6.png";
import coffeejourney7 from "../assets/coffeejourney7.png";
import Cards from './../components/Cards';
import Carousel from './../components/Carousel';
import LastCard from './../components/LastCard';
import Slide from './../components/Slide';


const Home = () => {
    return (
        <div>
            <Hero/>
            <Text/>
<div className='w-full px-4 py-8 flex gap-4'>
    <div className='w-1/2'>
        <CoffeeCard image={coffeejourney1} height="600px" title='Coffee Roaster'/>
    </div>
    <div className='w-1/2 flex flex-col gap-4'>
        <CoffeeCard image={coffeejourney2} height="380px" title='Cafe'/>
        <CoffeeCard image={coffeejourney3} height="205px" title='Retail'/>
    </div>
</div>
<div className='mb-4 flex justify-center items-center'>
                            <img src={miniLogo} alt="minilogo" />
                        </div>
            <MiddleCard/>
            <Text header='OUR PRODUCT CATAGORIES'/>
            
<div className="flex gap-3 px-4 py-8">
  <Cards image={coffeejourney4} width="70%" />
  <Cards image={coffeejourney5} title="COFFEE" width="30%" />
</div>
<div className="flex gap-3 px-4">
  <Cards image={coffeejourney6} title="ACCESSORIES" width="30%" />
  <Cards image={coffeejourney7} title="PROFESSIONAL EQUIPMENTS" width="70%" />
</div>
<div className='flex justify-between items-center gap-4 mt-12'>
<div className= "w-1/3 mx-16">
<h1 className='font-display font-extrabold text-5xl text-black'>
Explore Our Products
</h1>
<button className='btn btn-secondary mt-12'>SHOP NOW</button>
</div>
<div>
<Carousel/> 
</div>



</div>
<LastCard/>
<div className='text-center mt-12 mb-12 '>
    <h1 className='text-black text-4xl mb-8 font-bold tracking-widest'>
        Checkout Our <br />Instagram Posts
    </h1>
    <Slide/>
</div>
</div>
    );
};

export default Home;