import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState(""); //store the text in the input field for adding new items
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [menuItems, setMenuItems] = useState([]); // hold array of menu items

  let [filter, setFilter] = useState(""); // stores text entered
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([...menuItems, newMenuItem]); // Add the new item to the list
      setNewMenuItem(""); // Clear the input field after adding
    }
  }, [newMenuItem, menuItems]);
  //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
  //   // This involves adding a parameter and changing a class instance variable (props).
  //   setMenuItems([item, ...menuItems])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>Add Item</button>{" "}
      {/* button to add the item */}
      <br />
      {/* input field for filtering menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter menu items..."
      />
      <br />
      {/* Display filtered menu items */}
      <ul>
        {menuItems
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase())) // case insensitive filter
          .map((item, index) => (
            <li key={index}>{item}</li> // Render each menu item as a list item
          ))}
      </ul>
    </div>
  );
}
