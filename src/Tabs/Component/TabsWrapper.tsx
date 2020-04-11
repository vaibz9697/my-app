import React from 'react'
import Tabs from './Tabs'

const TabsWrapper = ()=>{
    const listOfTabs = ['About', 'et cetra']

    return <Tabs index = {0} listOfTabs = {listOfTabs}/>
}

export default TabsWrapper;