/**
 * Sort array of objects by name in alphabetic order
 * @param {*} objArray
 * @returns sorted objArray
 */
export const sortByName = (objArray = []) => objArray.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
