import './ProjectLink.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
// Define props type


type PropType = {
  name: string;
  url: string;
  tooltip: string;
};


// Destructure the props
const ProjectLink = ({ name, url, tooltip }: PropType): JSX.Element => {
  return (
    <>
      <a className="ProjectLink" href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <span data-after={tooltip} className="InfoCircle"><i className="fas fa-question-circle"></i></span>
    </>
  );
};

export default ProjectLink;
