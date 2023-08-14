export const getBookIDs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/book/bookIDs`);
  return await res.json();
};
