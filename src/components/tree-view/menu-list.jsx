/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MenuItem from "./menu-item";
import "./styles.css";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu_list_container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
