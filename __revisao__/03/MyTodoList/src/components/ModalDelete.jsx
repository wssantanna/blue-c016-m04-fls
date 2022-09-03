import { useContext } from 'react';

import { Service } from '../services/TodoService';

import { TodoContext } from "../contexts/TodoContext";

export default function ModalDelete({ idItem }) {

    const [items, setItems] = useContext(TodoContext);

    function deleteItemContext(id) {
        const itemsFilted = items.filter(item => item.id != id);
        setItems(itemsFilted)
    }

    function submitItemDelete(idItem) {

        console.log(`Item ${idItem} atualizado!`);

        Service
            .deleteItem(idItem)
            .then(isOkay => {
                if (isOkay) {
                    deleteItemContext(idItem);
                }
            });
    }

    return (
        <>
            <div
                className="modal fade"
                id={`deleteModal${idItem}`}
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="h5 mb-0">Delete task</h1>
                        </div>
                        <div className="modal-body">
                            <p>Do you want to delete task?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => submitItemDelete(idItem)}
                            >
                                Delete
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