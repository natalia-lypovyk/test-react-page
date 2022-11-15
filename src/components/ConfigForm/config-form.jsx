import React, { useState } from 'react';

import './tabs.css';
import { AddTab } from './add-tab';
import { UpdateTab } from './update-tab';
import { DeleteTab } from './delete-tab';

const tabs = [
  {
    name: 'addTab',
    title: 'Add'
  },
  {
    name: 'updateTab',
    title: 'Update'
  },
  {
    name: 'deleteTab',
    title: 'Delete'
  }
  ];

export const ConfigForm = () => {
  const [activeTab, setActiveTab] = useState('addTab');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const TabToRender = () => {
    switch (activeTab) {
      case 'addTab':
        return <AddTab />
      case 'updateTab':
        return <UpdateTab />
      case 'deleteTab':
        return <DeleteTab />
      default:
        return <AddTab />
    }
  }

  return (
    <>
      <div className="tabs">
        <ul className="nav">
          {tabs.map(({ name, title}) => (
            <li
              key={name}
              className={activeTab === name ? 'active nav__item' : 'nav__item'}
              onClick={() => handleTabChange(name)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        <TabToRender />
      </div>
    </>
  );
};
