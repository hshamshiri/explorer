import { v4 as uuidv4 } from "uuid";

const useAddNode = () => {
  function insertNode(tree, folderId, itemName, isFolder) {
    if (tree.id === folderId) {
      tree.children.unshift({
        id: uuidv4(),
        name: itemName,
        isFolder,
        children: [],
      });
      return tree;
    } else {
      if (tree.children) {
        tree.children.map((newTree) =>
          insertNode(newTree, folderId, itemName, isFolder)
        );
      }
    }
    return tree;
  }
  return { insertNode };
};

export default useAddNode;
