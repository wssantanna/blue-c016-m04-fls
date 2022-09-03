import { useState, useEffect, useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

import { Service } from '../services/TodoService';

export default function ModalEdit({ idItem }) {

    const [items, setItems] = useContext(TodoContext);

    const [item, setItem] = useState({});

    function getItemContext(id) {
        const itemFound = items.find(item => item.id == id);
        setItem(itemFound);
    }

    function updateItemContext(id, itemUpdated) {

        const itemsUpdated = items.map(item => {
            if (item.id == id) {
                item = itemUpdated;
            }
        });

        setItems(itemsUpdated);
    }

    function submitItemEdit(event) {

        event.preventDefault();

        const { inputEditTask, inputDescriptionTask } = event.target.elements;

        console.log(inputEditTask.value, inputDescriptionTask.value)

        const newItem = {
            title: inputEditTask.value,
            description: inputDescriptionTask.value
        }
        Service
            .updateItem(idItem, newItem)
            .then(response => {
                console.log(`Item ${response.id} atualizado!`)
                updateItemContext(response.id, response);
            });
    }

    useEffect(() => {

        setItem(getItemContext(idItem));

    }, []);

    return (
        <>
            <div
                className="modal fade"
                id={`editModal${idItem}`}
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <form onSubmit={(e) => submitItemEdit(e)}>
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
                                        value={item?.title}
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
                                        value={item?.description}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
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
                    </form>
                </div>
            </div>
        </>
    )
}