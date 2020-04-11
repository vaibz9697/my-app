import React from 'react';
import { TabsProps } from '../Schema/Tabs.types';
import './Tabs.scss'
// const styles = require('./Tabs.css');

export default function Tabs(props: TabsProps){
    const { listOfTabs} = props
    return (
        <div className = "Tabs">
            {listOfTabs.map(tab => {
                return <ul>{tab}</ul>;
            })}
        </div>
        )
}
