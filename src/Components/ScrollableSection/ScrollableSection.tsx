import React from "react";
import "./ScrollableSection.scss";

export type ScrollableSectionProps = {
  label: string;
  list: Array<{
    title: string | JSX.Element;
    link?: string;
    targetSelf?: boolean;
  }>;
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
          <div
            className="synthSectionItem"
            key={index}
            onClick={() => {
              if (syntheseTitle.link) {
                window.open(
                  syntheseTitle.link,
                  syntheseTitle.targetSelf ? "_self" : "_blank"
                );
              }
            }}
          >
            {syntheseTitle.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableSection;
