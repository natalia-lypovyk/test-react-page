import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './accordion.css'
import {
  Plus,
  Minus,
  Warning
} from '../../assets/svg';
import { ContentRow } from './content-row/content-row';
import { Tooltip } from './tooltip/tooltip';

export const Accordion = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const totalFarmHashrates = 'Total farm hashrates:';

  const toggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="accordion max-content">
      <div
        className="accordion__header-container"
        onClick={() => toggle()}
      >
        <div className="accordion__header-wrapper">
          {/*{!data?.status && (*/}
          {/*  <>*/}
          {/*    <div className="warning-image">*/}
          {/*      <Warning />*/}
          {/*    </div>*/}

          {/*    <Tooltip />*/}
          {/*  </>*/}
          {/*)}*/}

          <span className="accordion__main-text margin-left-18">
            {data?.name}
          </span>
        </div>

        <div className="accordion__header-wrapper">
          <span className="accordion__text margin-left-10">
            {totalFarmHashrates}
          </span>

          {data?.total_hashrates?.map((value) => (
            <span
              className="accordion__main-text margin-left-10"
              key={uuid()}
            >
              {`[${value?.coinTag || value?.algorithm}] ${value?.hashrate}`}
            </span>
          ))}

          <div className="icon-image">
            {isSelected  ? <Minus /> : <Plus />}
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="accordion__content-container">
          <div className="accordion__overflow">
            <div className="accordion__content-wrapper">
              <ContentRow type="header" />
            </div>

            {data?.rigs?.map((value) => (
              <div
                key={uuid()}
                className="accordion__content-wrapper"
              >
                <ContentRow rowText={value} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
