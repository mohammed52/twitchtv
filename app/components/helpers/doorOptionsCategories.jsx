import * as types from '../../types';

export const doorOptionsCategories = [
  {
    categoryName: types.CAT_DOORS,
    categoryTitle: types.CAT_DOORS_TITLE,
    categorySubTitle: types.CAT_DOORS_SUBTITLE,
    categoryType: types.CAT_TYPE_IMAGE_SELECT,
    nextCategory: types.CAT_CONTACT_DETAILS,
    options: [
      {
        name: types.OPT_SINGLE_DOOR,
        imageUrl: require('../../images/doors/optSingleDoor.png')
      },
      {
        name: types.OPT_DOUBLE_DOOR,
        imageUrl: require('../../images/doors/optDoubleDoor.png')
      },
      {
        name: types.OPT_SINGLE_DOOR,
        imageUrl: require('../../images/doors/optSingleDoor.png')
      },
      {
        name: types.OPT_DOUBLE_DOOR,
        imageUrl: require('../../images/doors/optDoubleDoor.png')
      },
      {
        name: types.OPT_SINGLE_DOOR,
        imageUrl: require('../../images/doors/optSingleDoor.png')
      },
      {
        name: types.OPT_DOUBLE_DOOR,
        imageUrl: require('../../images/doors/optDoubleDoor.png')
      }
    ]
  }
];
