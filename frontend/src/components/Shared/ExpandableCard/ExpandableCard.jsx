import { useState } from "react";
import Card from "../Card/Card";

const ExpandableCard = ({ title, description, other, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`exp-card`} onClick={() => setExpanded(prev => !prev)}>
      <h2>{title}</h2>
      <p>{description}<br/>{other}</p>
      <div className={`details ${expanded ? 'show' : ''}`}>
        {children}
      </div>
    </Card>
  );
};

export default ExpandableCard;
