const useEditNodeName = () => {
  function editNodeName(tree, id, name) {
    if (tree.id === id) {
      tree.name = name;
      return tree;
    } else {
      tree?.children &&
        tree.children.map((newTree) => editNodeName(newTree, id, name));
    }
    return tree;
  }
  return { editNodeName };
};

export default useEditNodeName;
