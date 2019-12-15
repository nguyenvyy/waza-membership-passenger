
export const checkHours = hour => {
    if (hour >= 0 && hour <= 10)
        return "buổi sáng"
    if (hour > 10 && hour <= 15)
        return "buổi trưa"
    if (hour > 15 && hour <= 18)
        return "buổi chiều"
    return "buổi tối"
}

export const getTitleByNumberOfVoucherType = number => {
    switch (number) {
        case 1:
            return 'Gói Đơn'
        case 2:
            return 'Gói Đôi'
        case 3:
            return 'Gói 3'
        case 4:
            return 'Gói 4'
        default:
            return 'Gói Error'
    }
}

export const formatVND = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const deleteformatVND = value => value.replace(/\$\s?|(,*)/g, '')

export function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;

        let executeFunction = function () {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
};

export function deduplicate(arr) {
    let set = new Set(arr);
    return Array.from(set);
}

export const upperCaseFirstCharacter = string => {
    const slice = string.slice(1);
    return string[0].toLocaleUpperCase() + slice

}

// save cookie
export function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie
export function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

// clear cookie
// save cookie
export function clearCookie(cname) {
    let d = new Date();
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=;" + expires + ";path=/";
}