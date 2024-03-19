import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
            <Section
                title="Model S"
                description="Orders online for touchup delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order online for touchup delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order online for touchup delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />            
            <Section
                title="Model Y"
                description="Order online for touchup delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />


            <Section
                title="Lowest Cost Solar Panel"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order NOW"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order NOW"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
            />
        </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
  
`