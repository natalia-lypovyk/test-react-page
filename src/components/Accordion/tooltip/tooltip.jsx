import './tooltip.css';

export const Tooltip = ({ text = '' }) => (
  <div className="tooltip">
    {text}
  </div>
);
