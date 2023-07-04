const extensions = {
  html: "📑 ",
  css: "📈 ",
  txt: "📄 ",
  js: "📉 ",
};

const useExtension = () => {
  function getExtensions(fileName, isFolder) {
    const [, format] = fileName && fileName.split(".");
    if (isFolder) return "📁";
    else if (format) return extensions[format];
  }

  return { getExtensions };
};

export default useExtension;
