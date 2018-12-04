export const get = async (url) => {
    const response = await fetch(url);
    if (response.ok) return response.json();
    throw new Error('Failed fetch data...!');
};