import React, { useState } from 'react';

import './tabs.css';
import { AddTab } from './add-tab';
import { UpdateTab } from './update-tab';
import { DeleteTab } from './delete-tab';
import { useConfigContext } from '../../configs.context';

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
  }];

export const ConfigForm = () => {
  const [activeTab, setActiveTab] = useState('addTab');
  const configs = useConfigContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
        {activeTab === 'addTab' ? (
          <AddTab />
        ) :
          activeTab === 'updateTab' ? (
            <UpdateTab configs={configs} />
          ) : (
            <DeleteTab />
          )
        }
      </div>
    </>
  );
};
