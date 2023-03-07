import { Collapse } from "antd";
import Category from "./Category";
import "./index.css";

const { Panel } = Collapse;

export default function SideBar() {
  return (
    <Collapse
      style={{
        border: "none",
        fontFamily: "inter",
        fontSize: "10px",
      }}
    >
      <Panel header="Category 1" key="1">
        <Category />
      </Panel>
      <Panel header="Category 2" key="2">
        <Category />
      </Panel>
    </Collapse>
  );
}
