// Модули
import axios from 'axios';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?key=21824668-10aeb8c8af54ec25684dd6884&q=${searchQuery}&page=${currentPage}&image_type=photo&per_page=12`,
  );
};

export default { fetchHits };
