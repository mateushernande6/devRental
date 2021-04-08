import {HomeSection} from "./style";

import React from 'react';
import HomeHeader from "../../components/HomeHeader";
import Partners from "../../components/Partners";
import GoalsMissions from "../../components/GoalsMissions";
import Attests from "../../components/Attests";
import Contact from "../../components/Contact";

const Home = () => {
    return (
       <>
       <HomeSection>
           <HomeHeader/>
       </HomeSection>

       <HomeSection>
            <Partners/>
       </HomeSection>

       <HomeSection>
           <GoalsMissions/>
       </HomeSection>

       <HomeSection>
        <Attests/>
       </HomeSection>

       <HomeSection>
           <Contact/>
       </HomeSection>

       </>
    );
};

export default Home;