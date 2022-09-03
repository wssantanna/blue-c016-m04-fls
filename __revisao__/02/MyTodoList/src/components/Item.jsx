import { useState } from "react";

import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

export default function Item({ bodyItem }) {


    const [item, setItem] = useState(bodyItem);

    const { id, title, checked } = item;

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
                        {title}
                    </label>
                </div>
                <div className="d-flex gap-2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#editModal${id}`}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteModal${id}`}
                    >
                        Delete
                    </button>
                </div>
            </li>

            <ModalEdit idItem={id} />

            <ModalDelete idItem={id} />
        </>
    )
}