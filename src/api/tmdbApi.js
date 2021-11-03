import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (ctg, id) => {
    const url = category[ctg] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (ctg, params) => {
    const url = 'search/' + category[ctg];
    return axiosClient.get(url, params);
  },
  detail: (ctg, id, params) => {
    const url = category[ctg] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (ctg, id) => {
    const url = category[ctg] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (ctg, id) => {
    const url = category[ctg] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
