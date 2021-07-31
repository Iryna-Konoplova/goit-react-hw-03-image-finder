import axios from 'axios';

const KEY = '21824668-10aeb8c8af54ec25684dd6884&';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&
    image_type=photo&page=${currentPage}&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };

// import axios from 'axios';
// const KEY = '21824668-10aeb8c8af54ec25684dd6884&';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const fetchHits = async ({ searchQuery = '', currentPage = 1 }) => {
//   return axios
//     .get(
//       `?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.hits);
// };

// // export default { fetchHits }
// const exportObject = { fetchHits };
// export default exportObject;

// // Модули
// import axios from 'axios';

// const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
//   return axios
//     .get(
//     `https://pixabay.com/api/?key=21824668-10aeb8c8af54ec25684dd6884&q=${searchQuery}&page=${currentPage}&image_type=photo&per_page=12`,
//   );
// };

// export default { fetchHits };

// import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 4330ebfabc654a6992c2aa792f3173a3';

// const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
//     )
//     .then(response => response.data.articles);
// };

// export default { fetchArticles };
