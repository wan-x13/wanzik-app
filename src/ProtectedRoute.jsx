import React from 'react';
import styled from 'styled-components';
import PLayer from './components/PLayer/PLayer';
import Slidebar from './components/slidebar/Slidebar';
import Home from './pages/Home/Home';



const RouteContainer = styled.div` 

`
const RouteContent = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    
    `
const PlayerContainer = styled.div`
      position : fixed;
      bottom: 0;
      width : 100vw;
     
      `
const ProtectedRoute = () => {
    return (
        <RouteContainer>
           
            <RouteContent>
            <Slidebar/>
            <Home/>
                
            </RouteContent>

            <PlayerContainer>
               <PLayer/>

            </PlayerContainer>
          
            
          
            
        </RouteContainer>
    );
};

export default ProtectedRoute;