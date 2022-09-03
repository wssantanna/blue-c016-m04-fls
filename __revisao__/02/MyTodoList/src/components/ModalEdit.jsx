import { useState, useEffect, useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

export default function ModalEdit({ idItem }) {

    const items = useContext(TodoContext);

    const [item, setItem] = useState({});

    function getItemContext(id) {
        return items.find(item => item.id == id);
    }

    function editItem(item) {
        console.log(`Item ${item.id} atualizado!`);
    }

    useEffect(() => {
        setItem(getItemContext(idItem))
    }, []);

    return (
        <>
            <div
                className="modal fade"
                id={`editModal${item.id}`}
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="h5 mb-0">Edit task</h1>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label
                                    htmlFor="inputEditTask"
                                    className="form-label"
                                >
                                    Current task
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEditTask"
                                    placeholder="My current task"
                                    value={item.title}
                                    onChange={() => item.title}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="inputDescriptionTask"
                                    className="form-label"
                                >
                                    Description task
                                </label>
                                <textarea
                                    className="form-control"
                                    id="inputDescriptionTask"
                                    rows="3"
                                    placeholder="My description task"
                                    value={item.description}
                                    onChange={() => item.description}
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => editItem(item)}
                            >
                                Save changes
                            </button>
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}