import { TodoContext } from '../contexts/TodoContext';

import { useContext } from 'react';

import { Service } from '../services/TodoService';

import Item from './Item';
import { useState } from 'react';

export default function MyList({ name }) {

    const [items] = useContext(TodoContext);

    const [newItem, setNewItem] = useState(null);

    function submitCreateItem() {
        Service
            .createItem(newItem)
            .then(response => {
                console.log(response)

            });
    }

    return (
        <>
            <div className="container mt-5 mb-3">

                <h1>{name}</h1>

                <div className="d-flex gap-2 mt-5 mb-3">

                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Add your task..."
                        aria-label="Add your task..."
                        onChange={(e) => setNewItem({ title: e.target.value })}
                    />

                    <button
                        className="btn btn-success btn-lg"
                        type="button"
                        onClick={submitCreateItem}
                    >
                        +
                    </button>

                </div>

                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {items.map((item, index) => <Item key={index} idItem={item.id} />)}
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}