import { useState, useEffect } from "react";
import data from "./data/explorer";
import { FileExplorer } from "./component";
import { saveData, retriveData } from "./utilities";
import useAddNode from "./hooks/useAddNode";
import useDeleteNode from "./hooks/useDeleteNode";
import useEditNodeName from "./hooks/useEditNodeName";

const App = () => {
  const [explorerData, setExplorerData] = useState(data);
  const { insertNode } = useAddNode();
  const { deleteNode } = useDeleteNode();
  const { editNodeName } = useEditNodeName();

  useEffect(() => {
    setExplorerData(explorerData);
  }, [explorerData]);

  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, itemName, isFolder);
    setExplorerData(finalTree);
    saveData("explorerFile", finalTree);
  };

  const handleDeleteNode = (id) => {
    const finalTree = deleteNode(explorerData, id);
    setExplorerData({ ...finalTree });
  };

  const handleEditNode = (id, name) => {
    const finalTree = editNodeName(explorerData, id, name);
    setExplorerData({ ...finalTree });
  };

  return (
    <div className="flex  flex-col justify-center">
      <h1 style={{ fontSize: 50 }} className="font-bold">
        Explorer
      </h1>

      <FileExplorer
        data={explorerData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
      />
    </div>
  );
};

export default App;
