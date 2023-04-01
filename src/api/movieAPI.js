import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
}

export const movieType = {
    upComing: 'upcoming',
    popular: 'popular',
    topRated: 'top_rated'
}

export const tvType = {
    onTheAir: 'on_the_air',
    popular: 'popular',
    topRated: 'top_rated',
}

const API_KEY = '?api_key=3e92671fca168537fe01c0fad2e77b4d'

const movieAPI = {
    getMovieList: (type) => {
        const url = `movie/${movieType[type]}${API_KEY}`;
        return axiosClient.get(url);
    },
    getTvList: (type,params) => {
        const url = `tv/${tvType[type]}${API_KEY}`
        return axiosClient.get(url,params)
    },
    getOtherVideo: (type,id) => {
        const url = `${category[type]}/${id}/videos${API_KEY}`
        return axiosClient.get(url);
    },
    getDetail: (cate, id) => {
        const url = `${category[cate]}/${id}${API_KEY}`
        return axiosClient.get(url)
    },
    getCredits: (cate,id) => {
        const url = `${category[cate]}/${id}/credits${API_KEY}`
        return axiosClient.get(url)
    },
    getSimilarVideo: (cate,id) => {
        const url = `${category[cate]}/${id}/similar${API_KEY}`
        return axiosClient.get(url)
    }
}

export default movieAPI;