import {toast} from 'react-toastify';

const showErrorToast = (message: string) => {
    toast.error(message);
}

const showSuccessToast = (message: string) => {
    toast.success(message);
}

export { showErrorToast , showSuccessToast};