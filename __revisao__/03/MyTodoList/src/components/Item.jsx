import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { useState } from "react";
import { useEffect } from "react";

export default function Item({ idItem }) {

    const [items] = useContext(TodoContext);

    const [item, setItem] = useState({});

    function getItemContext(id) {
        const itemFound = items.find(item => item.id == id);
        setItem(itemFound);
    }

    useEffect(() => {
        getItemContext(idItem);
    }, [])

    return (
        <>
            <li className="list-group-item d-flex align-items-center justify-content-between py-3">
                <div>
                    <input
                        className="form-check-input me-3"
                        type="checkbox"
                        id="firstCheckbox"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="firstCheckbox"
                    >
                        {item.title}
                    </label>
                </div>
                <div className="d-flex gap-2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#editModal${item.id}`}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteModal${item.id}`}
                    >
                        Delete
                    </button>
                </div>
            </li>

            <ModalEdit idItem={item.id} />

            <ModalDelete idItem={item.id} />
        </>
    )
}