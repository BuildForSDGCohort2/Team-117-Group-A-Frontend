export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'))
}
