'use client';
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const TabsComponent = ({ onTabChange }) => {
    const categories = [
        "Fashion", "Electronics", "Bags", "Footwear",
        "Groceries", "Beauty", "Wellness", "Jewelry"
    ];

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        if (onTabChange) {
            onTabChange(newValue);
        }
    };

    return (
        <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="Category Tabs"
        >
            {categories.map((category, index) => (
                <Tab key={index} label={category} className="link" />
            ))}
        </Tabs>
    );
};

export default TabsComponent;
