const useDeleteNode = () => {
  function deleteNode(tree, id) {
    if (tree.children) {
      const findItem = tree.children.find((item) => item.id === id);
      if (findItem) {
        let filteredChild = tree.children.filter((item) => item !== findItem);
        tree.children = filteredChild;
      } else {
        tree.children.map((newTree) => deleteNode(newTree, id));
      }
    }

    return tree;
  }
  return { deleteNode };
};

export default useDeleteNode;
