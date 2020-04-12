import React, { useState } from 'react'
import Tabs from './Tabs'
import './TabsWrapper.scss'
import { Tab } from '../Schema/Tab.types'
const TabsWrapper = ()=>{
    const aboutMe: string = 'Hey, This is Vaibhav.'
    const myAccount: string = 'This is my account'
    const listOfAnime: string[] = ['Vinland Saga', 'Naruto', 'One Piece', 'Hunter x Hunter']
    const myAnime: JSX.Element = <div>{listOfAnime.map(anime => {
        return (<ul>{anime}</ul>);
    })}</div> 
    const heading: string[] = ['My Account', 'Anime', 'About me'];
    const content: JSX.Element[] = [<div>{myAccount}</div>, <div>{myAnime}</div>, <div>{aboutMe}</div>]

    let listOfTabs: Tab[] = [];
    for(let i = 0; i < heading.length; i++){
        const tab: Tab = {'heading': heading[i], 'content': content[i] };
        listOfTabs.push(tab);
    }

    const [currentTab, setCurrentTab] = useState(1)

    const onTabChange = (tabSelected: number) => {
        setCurrentTab(tabSelected);
    }

    return (
        <div className = "TabsWrapper"> 
            <Tabs currentTab = {currentTab} onTabClick = {onTabChange} listOfTabs = {listOfTabs}/>
        </div>
    );
}

export default TabsWrapper;