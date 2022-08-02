export default function Item({ pessoa }) {

    const { id, nome } = pessoa;

    return (
        <p>
            <strong>#{id ?? "0"}</strong> {nome ?? "Qualquer nome."}
        </p>
    );
}