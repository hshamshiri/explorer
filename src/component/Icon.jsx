import useExtension from "../hooks/useExtension";

const Icon = ({ name, isFolder }) => {
  const { getExtensions } = useExtension();
  return <span>{getExtensions(name, isFolder)}</span>;
};

export default Icon;
