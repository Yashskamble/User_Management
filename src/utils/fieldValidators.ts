export const isValidContact = (val: string) => /^\d{0,10}$/.test(val);

export const isValidPincode = (val: string) => /^\d{0,6}$/.test(val);
