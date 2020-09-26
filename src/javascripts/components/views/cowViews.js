import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  cowData.getAllCows()
    .then((response) => {
      if (response.length) {
        response.forEach((element) => {
          $('#app').append(card.cowMaker(element));
        });
      } else {
        $('#app').append('<h2>No cows</h2>');
      }
    });
};
export default { cowsView };
