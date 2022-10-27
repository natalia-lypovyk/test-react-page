import React from 'react';
import { v4 as uuid } from 'uuid';

import { formatDate } from './format-time';

export const getText =  (style = '', text, isHeader, isHash = false, isDate = false) => {
  if (isHash && !isHeader) {
    return text && text?.map((item) => (
      <p
        key={uuid()}
        className='accordion__text'
      >
        {item?.algorithm}: {item?.hashrate}
      </p>
    ))
  }

  if (typeof text === 'string' || typeof text === 'number') {
    return (
      <span
        className={`${!isHeader ? 'accordion__text' : 'accordion__text-bold'} ${style}`}
      >
        {text}
      </span>
    )
  }

  if (typeof text === 'object') {
    if (text == null) {
      return <p className='accordion__text'>-</p>
    }

    if (isDate) {
      return (
        <span
          className={`${!isHeader ? 'accordion__text' : 'accordion__text-bold'} ${style}`}
        >
        {formatDate(text)}
      </span>
      )
    }

    return text?.map((textItem) => (
      <p
        key={textItem}
        className={`${!isHeader ? 'accordion__text' : 'accordion__text-bold'} ${style}`}
      >
        {textItem}
      </p>
    ))
  }
};
