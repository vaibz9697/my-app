import { Tab } from "./Tab.types";

export interface TabsProps{
    currentTab: number;
    onTabClick: (tabSelected: number) => void;
    listOfTabs: Tab[];
}