export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
    // this will take static path and add a relative path and send it using getImageUrl Method
}

