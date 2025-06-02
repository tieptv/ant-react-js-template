import axiosInstance from "./axiosIntance";

const get = async (url, { params = null } = {}) => {
    return await axiosInstance.get(url, { params }).then(handleResponse).catch(handleError);
}

const post = async (url, body, { headers = null } = {}) => {
    return await axiosInstance.post(url, body, { headers }).then(handleResponse).catch(handleError);
}

const patch = async (url, body) => {

    return await axiosInstance.patch(url, body).then(handleResponse).catch(handleError);
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (url) => {
    return await axiosInstance.delete(url).then(handleResponse).catch(handleError);
}

export const axiosWrapper = {
    get,
    post,
    patch,
    delete: _delete
};

// // helper functions

function handleResponse(response) {
    return response.data;
}

function handleError(err) {
    if (typeof window !== 'undefined') {
        if (![401, 403].includes(err?.response?.status)) {
        }
        // debugger
        if (err?.response?.status === 401) {
            // window.location.href = ROUTES.LOGIN;
        }

    }

    throw err
}
