import { TodoContext } from '../contexts/TodoContext';

import { useContext } from 'react';

import Item from './Item';

export default function MyList({ name }) {

    const items = useContext(TodoContext);

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
                    />

                    <button
                        className="btn btn-success btn-lg"
                        type="button"
                    >
                        +
                    </button>

                </div>

                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {items.map((item, index) => <Item key={index} bodyItem={item} />)}
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}