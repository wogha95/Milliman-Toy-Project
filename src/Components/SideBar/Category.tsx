import { useState } from "react";
import { Resizable, ResizeCallback } from "re-resizable";
import { TreeItem, TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Category.css";

export default function Category() {
  const [height, setHeight] = useState(277);

  const handleResizable: ResizeCallback = (event, direction, ref, delta) => {
    setHeight(height + delta.height);
  };

  return (
    <Resizable
      size={{ width: 230, height: height }}
      onResizeStop={handleResizable}
      enable={{
        top: false,
        right: false,
        bottom: true,
        left: false,
        topLeft: false,
        bottomLeft: false,
        topRight: false,
        bottomRight: false,
      }}
    >
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        style={{
          width: 230,
          height: height,
          overflowY: "auto",
        }}
      >
        <TreeItem nodeId="0" label="Folder 1"></TreeItem>
        <TreeItem nodeId="1" label="Folder 2">
          {fileIndexList.map((fileIndex) => (
            <TreeItem
              key={fileIndex}
              nodeId={`1-${fileIndex}`}
              label={`File ${fileIndex}`}
            ></TreeItem>
          ))}
        </TreeItem>
      </TreeView>
    </Resizable>
  );
}

const fileIndexList = Array.from({ length: 10 }, (_, index) => index + 1);
