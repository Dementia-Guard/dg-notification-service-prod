import HttpType from "./HttpType.js";

const response = (res, code, data) => {
    const status = HttpType.getStatus(code);
    const success = code >= 200 && code < 300 && !data?.error; // Success for 2xx status codes, and no error message

    const payLoad = {
        code,
        status,
        success,
        data
    };

    return res.status(code).json(payLoad);
};

export default response;