import styled from "styled-components";
import React, { useState } from 'react';

import BestMatches from "../Best Matches/index";
import SavedJobsBox from "../Saved Jobs/index";

const TabsDiv = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid #e4ede4;
    border-radius: 16px;
    margin: 3% auto;
`;


const Tab = styled.div`
    margin-left: 20px;
    padding: 15px 10px 10px 5px;
    cursor: pointer;
    font-weight: bold;
    color: ${props => props.active ? '#222' : '#666'};
    border-bottom: ${props => props.active ? '3px solid black' : 'none'};
`;

const Index = () => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    


    return (
        <TabsDiv>

            <h1 style={{padding:'25px'}}>
                Jobs you might like
            </h1>

            <div style={{display:'flex', borderBottom:'1px solid #e4ede4'}}>
                <Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>Best Matches</Tab>
                <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>Most Recent</Tab>
                <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>Saved Jops</Tab>
            </div>

            

            {activeTab === 0 && <>
                <p style={{padding:'25px'}}>
                    Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.
                </p>
                <BestMatches/>
                <BestMatches/>
                <BestMatches/>
            </>}

            {activeTab === 1 && <>
                <p style={{padding:'25px'}}>
                    Browse the most recent jobs that match your skills and profile description to the skills clients are looking for.
                </p>
                <BestMatches/>
            </>}
            {activeTab === 2 && <>
                <SavedJobsBox>

                </SavedJobsBox>
            </>}

        </TabsDiv>
    )
}

export default Index