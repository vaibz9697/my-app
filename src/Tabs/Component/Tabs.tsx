import React, { MouseEventHandler, useState } from 'react';
import { TabsProps } from '../Schema/Tabs.types';
import './Tabs.scss'
// const styles = require('./Tabs.css');

export default function Tabs(props: TabsProps){
    const {currentTab, listOfTabs, onTabClick} = props;
    // console.log(listOfTabs)

    // const [currentTab, setCurrentTab] = useState(index)
    // const tabsOnClickHandler = () => {
    //     onTabClick(currentTab);
    // }

    return (
        <>
            <div className = "Tabs">
                {listOfTabs.map((tab, index) => {
                    return <ul onClick={() => {onTabClick(index);}}>{tab.heading}</ul>
                })}
            </div>
            <div>{listOfTabs[currentTab].content}</div>
        </>
    )
}
