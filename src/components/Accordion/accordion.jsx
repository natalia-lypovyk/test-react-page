import React from 'react';

import './accordion.css'
import Warning from '../../assets/svg/warning';
import Plus from '../../assets/svg/plus';
import Minus from '../../assets/svg/minus';
import ContentRow from './contentRow';

import { tableData } from '../../constats/tableData';

const Accordion = ({ selected, setSelected, data, index }) => {
  const totalFarmHashrates = 'Total farm hashrates:';
  const toggle = (item) => {
    if (selected === item) {
      setSelected(null);
    }

    setSelected(item);
  };

  return (
    <div className={'accordionContainer'}>
      <div
        className={'accordionHeaderContainer'}
        onClick={() => toggle(index)}
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
              key={value}
            >
              {value}
            </span>
          ))}

          <div className={'warningImage'} style={{marginRight:'18px'}}>
            {selected === index  ? <Minus /> : <Plus />}
          </div>
        </div>
      </div>

      {selected === index && (
        <div className={'accordionContentContainer'}>
          <div className={'accordionContentWrapper contentDarkBackground'}>
            <ContentRow type={'header'}/>
          </div>

          {tableData.map((value, i) => (
              <div
                key={value.name}
                className={`accordionContentWrapper ${i !== 0 && i % 2 && 'contentDarkBackground'}`}
              >
                <ContentRow rowText={value}/>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default  Accordion;
