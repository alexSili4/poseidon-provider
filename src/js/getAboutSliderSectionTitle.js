const getAboutSliderSectionTitle = (sectionIndex) => {
  const titles = {
    0: 'Покупець бачить рекламу продукта на сайті торгової мережі',
    1: 'Вказує номер телефона',
    2: 'Отримує SMS з купоном',
    3: 'Відвідує магазин і отримує товар',
  };

  return titles[sectionIndex];
};

export default getAboutSliderSectionTitle;
