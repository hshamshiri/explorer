const EditButtons = ({
  data,
  visibleAddIcons,
  handleShowInput,
  handleDeleteNode,
  handleShowEditName,
}) => {
  return (
    visibleAddIcons && (
      <div className="pl-6">
        {data?.isFolder && (
          <>
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleShowInput(true, false);
              }}
              className="pl-2"
            >
              +📁
            </span>
            <span
              className="pl-2"
              onClick={(e) => {
                e.stopPropagation();
                handleShowInput(false, true);
              }}
            >
              +📄
            </span>
          </>
        )}
        <span
          className="pl-2"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteNode(data.id);
          }}
        >
          -⏹
        </span>
        <span
          className="pl-2"
          onClick={(e) => {
            e.stopPropagation();
            handleShowEditName();
          }}
        >
          📝
        </span>
      </div>
    )
  );
};

export default EditButtons;
