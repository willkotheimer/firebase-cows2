import farmersData from '../../helpers/data/farmerData';
import card from '../cards/farmerCards';

const farmersView = () => {
  farmersData.getAllFarmers()
    .then((response) => {
      if (response.length) {
        response.forEach((element) => {
          $('#app').append(card.farmerMaker(element));
        });
      } else {
        $('#app').append('<h2>no farmers</h2>');
      }
    });
};

export default { farmersView };
