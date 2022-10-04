export const url = 'http://localhost:8080/api';

//token để gắn vào header mỗi lần request.
export const setHeaders = () => {
    const headers = {
        headers: {
            'x-auth-token': localStorage.getItem('token'),
        }
    }
    return headers;
}