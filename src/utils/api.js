import { useEffect, useRef, useState } from "react";

const deleteUser = (id) => {
  fetch(`http://localhost:4000/user/${id}`, { method: "DELETE" });
  window.location.reload();
};

const allUser = () => {
  return new Promise((res, rej) => {
    fetch("http://localhost:4000/user")
      .then((data) => data.json())
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};

const addUser = (e) => {
  e.preventDefault();
  const data = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    phone: e.target.elements.phone.value,
  };

  return new Promise((res, rej) => {
    fetch(`http://localhost:4000/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};

const updateUser = (e, id) => {
  e.preventDefault();
  const data = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    phone: e.target.elements.phone.value,
  };

  return new Promise((res, rej) => {
    fetch(`http://localhost:4000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};
function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState, addUser, updateUser, deleteUser, allUser };
