import React from "react";
import "./ScrollableSection.scss";

type ScrollableSectionProps = {
  label: string;
  list: string[];
};

const ScrollableSection: React.FC<ScrollableSectionProps> = ({
  label,
  list,
}) => {
  return (
    <div className="synthSectionContainer">
      <h3 className="synthSectionTitle">{label}</h3>
      <div className="synthSectionList">
        {list.map((syntheseTitle, index) => (
          <div className="synthSectionItem" key={index}>
            {syntheseTitle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableSection;
