import Api from "./Api";

export const getGames = () => {
    return Api.get('/games')
}