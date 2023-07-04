const retriveData = (name) => {
  const data = localStorage.getItem(name);
  return data ? data : null;
};

export default retriveData;
