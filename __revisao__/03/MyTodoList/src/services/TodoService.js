

function TodoService(baseUrl) {

    this.createItem = async function (bodyItem) {

        const configRequest = {
            method: 'POST',
            body: JSON.stringify(bodyItem)
        }

        const response = await fetch(`${baseUrl}/`, configRequest);

        const newItem = await response.json();

        return newItem;
    }

    this.getItems = async function () {

        const response = await fetch(`${baseUrl}/`);

        const items = await response.json();

        return items;

    }

    this.updateItem = async function (idItem, bodyNewItem) {

        const configRequest = {
            method: 'PATCH',
            body: JSON.stringify(bodyNewItem)
        }

        const response = await fetch(`${baseUrl}/${idItem}`, configRequest);

        const itemReplaced = await response.json();

        return itemReplaced;

    }

    this.deleteItem = async function (idItem) {

        const configRequest = {
            method: 'DELETE'
        }

        const response = await fetch(`${baseUrl}/${idItem}`, configRequest);

        const isOkay = await response.ok;

        return isOkay;

    }

}

export const Service = new TodoService('https://www.blueedtech.com.br/api/todos');