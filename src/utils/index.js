
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
    var timeout;
    return function () {
        var context = this,
            args = arguments;

        var executeFunction = function () {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
};