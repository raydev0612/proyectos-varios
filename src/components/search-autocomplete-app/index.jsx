import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const fetchListUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListUsers();
  }, []);

  const handleClick = (event) => {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  return (
    <div className="search_autocomplete-container">
      {loading ? (
        <h1>Loading data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search"
          placeholder="Search Users here.."
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
