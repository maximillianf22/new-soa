import { UpdateOptions } from "react-toastify";

export const successToastOptions: UpdateOptions = {
    render: "Melo!",
    type: "success",
    isLoading: false,
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl:false,
    pauseOnFocusLoss: true,
    draggable: false,
    pauseOnHover: true,
}

export const errorToastOptions: UpdateOptions = {
    render: "Melon't!",
    type: "error",
    isLoading: false,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl:false,
    pauseOnFocusLoss: true,
    draggable: false,
    pauseOnHover: true,
}