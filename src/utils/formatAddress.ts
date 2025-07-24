export const formatAddress = (
  address: string,
  city: string,
  state: string,
  pincode: string
) => [address, city, state, pincode].filter(Boolean).join(", ");
