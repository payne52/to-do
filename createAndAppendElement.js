export const createAndAppendElement = (tag, stylesArr = '', place = '', innerText = '', attrsObj = '') => {
    const newElem = document.createElement(tag);

    if (stylesArr) {
        for (let item of stylesArr) {
            newElem.classList.add(item);
        }
    }    

    if (attrsObj) {
        for (let key in attrsObj) {
            newElem.setAttribute(key, attrsObj[key]);
        }
    }

    if (place) place.append(newElem);

    newElem.append(innerText);
    return(newElem);
}