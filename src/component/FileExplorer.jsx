import { useState, useEffect } from "react";
import { Icon } from "./index";
import { EditButtons } from "./index";
import clsx from "clsx";

const FileExplorer = ({
  data,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [visibleAddIcons, setVisibleAddIcons] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showEditInputText, setShowEditInputText] = useState(false);
  const [editInputText, setEditInputText] = useState("");
  const [showInput, setShowInput] = useState({
    visible: false,
    folder: false,
  });

  const handleExpansion = (e) => {
    e.stopPropagation();
    setIsExpand(!isExpand);
    setShowInput({ ...showInput, visible: false });
  };

  const handleShowInput = (folder) => {
    setShowInput({ visible: true, folder: folder });
  };

  const handleShowEditName = (toggle) => {
    setShowEditInputText(toggle);
  };

  const onAddFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(data.id, inputText, showInput.folder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const saveEdittedName = (e, id) => {
    if (e.keyCode === 13 && editInputText) {
      handleEditNode(id, editInputText);
      setEditInputText("");
      setShowEditInputText(false);
    }
  };

  return (
    <div
      className="w-80 pl-6 cursor-pointer onMouse  "
      onClick={(e) => {
        handleExpansion(e);
      }}
    >
      <div
        className="flex"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setVisibleAddIcons(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setVisibleAddIcons(false);
          handleShowEditName(false);
        }}
      >
        <div className="flex flex-col ">
          <div className="flex felx-row">
            <span>
              <Icon name={data?.name} isFolder={data?.isFolder} />
              {showEditInputText ? (
                <input
                  onChange={(e) => setEditInputText(e.target.value)}
                  onKeyDown={(e) => saveEdittedName(e, data.id)}
                  placeholder={data?.name}
                  autoFocus
                />
              ) : (
                <span className={clsx({ "font-bold": data.isFolder })}>
                  {" "}
                  {data?.name}
                </span>
              )}
            </span>
            {/*add/delete icons */}
            <EditButtons
              data={data}
              visibleAddIcons={visibleAddIcons}
              handleShowInput={handleShowInput}
              handleDeleteNode={handleDeleteNode}
              handleShowEditName={() => handleShowEditName(true)}
            />
          </div>
        </div>
      </div>

      {/* input */}
      {showInput.visible && (
        <div className="inputContainer" onClick={(e) => e.stopPropagation()}>
          <span className="pl-2 mr-1">{showInput.folder ? "📁" : "📄"}</span>
          <input
            className="inputContainer_input"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => onAddFolder(e)}
            onBlur={() => setShowInput({ ...showInput, visible: false })}
            autoFocus
          />
        </div>
      )}
      {isExpand && data?.isFolder
        ? data?.children.map(({ id, name, children, isFolder }, key) => (
            <div key={key} className="flex">
              <FileExplorer
                data={{ id, name, children, isFolder }}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleEditNode={handleEditNode}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default FileExplorer;
