const saveData = (name, data) => {
  let dataString = JSON.stringify(data);
  localStorage.setItem(name, dataString);
};

export default saveData;
