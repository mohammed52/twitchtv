import * as types from '../../types';

export const MASTER_OPTIONS = [
  {
    categoryId: types.CAT_DOORS_ID,
    categoryTitle: types.CAT_DOORS_TITLE,
    categorySubTitle: types.CAT_DOORS_SUBTITLE,
    categoryType: types.CAT_TYPE_IMAGE_SELECT,
    nextCategory: types.CAT_CONTACT_DETAILS,
    options: [
      {
        optionId: types.OPT_SINGLE_DOOR_ID,
        imageUrl: require('../../images/doors/optSingleDoor.png'),
        headerText: types.OPT_SINGLE_DOOR_HEADERTEXT,
        subHeaderText: types.OPT_SINGLE_DOOR_SUBHEADERTEXT
      },
      {
        optionId: types.OPT_DOUBLE_DOOR_ID,
        imageUrl: require('../../images/doors/optDoubleDoor.png'),
        headerText: types.OPT_DOUBLE_DOOR_HEADERTEXT,
        subHeaderText: types.OPT_DOUBLE_DOOR_SUBHEADERTEXT
      }
    ]
  }
];
