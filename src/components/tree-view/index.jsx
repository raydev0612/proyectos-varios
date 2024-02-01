/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree_view_container">
      <MenuList list={menus} />
    </div>
  );
}
