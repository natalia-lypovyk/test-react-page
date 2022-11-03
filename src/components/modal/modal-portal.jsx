import { createPortal } from 'react-dom';
import { useLayoutEffect, useState } from 'react';

const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

const ModalPortal = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState(null);
  let systemCreated = false;

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ModalPortal;
