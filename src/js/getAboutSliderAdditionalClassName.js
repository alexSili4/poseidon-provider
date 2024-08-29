const getAboutSliderAdditionalClassName = (sectionIndex) => {
  const classNames = {
    0: 'js-about-slider-pagination-item-first',
    1: 'js-about-slider-pagination-item-second',
    2: 'js-about-slider-pagination-item-third',
    3: 'js-about-slider-pagination-item-fourth',
  };

  return classNames[sectionIndex];
};

export default getAboutSliderAdditionalClassName;
