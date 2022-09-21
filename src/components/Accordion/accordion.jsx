import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './accordion.css'
import Warning from '../../assets/svg/warning';
import Plus from '../../assets/svg/plus';
import Minus from '../../assets/svg/minus';
import ContentRow from './contentRow';

import { tableData } from '../../constats/tableData';

const Accordion = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const totalFarmHashrates = 'Total farm hashrates:';

  const toggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={'accordionContainer'}>
      <div
        className={'accordionHeaderContainer'}
        onClick={() => toggle()}
      >
        <div className={'accordionHeaderWrapper'}>
          {!data?.status && (
            <div className={'warningImage'}>
              <Warning/>
            </div>
          )}

          <span
            className={'accordionMainText'}
            style={{marginLeft:'18px'}}
          >
            {data?.name}
          </span>
        </div>

        <div className={'accordionHeaderWrapper'}>
          <span className={'accordionMainText fontWeight400 marginLeft10'}>
            {totalFarmHashrates}
          </span>

          {data?.rates.map((value) => (
            <span
              className={'accordionMainText marginLeft10'}
              key={uuid()}
            >
              {value}
            </span>
          ))}

          <div className={'warningImage'} style={{marginRight:'18px'}}>
            {isSelected  ? <Minus /> : <Plus />}
          </div>
        </div>
      </div>

      {isSelected && (
        <div className={'accordionContentContainer'}>
          <div className={'accordionContentWrapper contentDarkBackground'}>
            <ContentRow type={'header'} />
          </div>

          {tableData.map((value, i) => (
              <div
                key={uuid()}
                className={`accordionContentWrapper ${i !== 0 && i % 2 && 'contentDarkBackground'}`}
              >
                <ContentRow rowText={value} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default  Accordion;
