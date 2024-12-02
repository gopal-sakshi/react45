import { useState } from 'react';
import { foods, filterItems } from './react14_search23_data.js';

export default function FilterableList() {
    const [query, setQuery] = useState("");
    var foods11 = filterItems(foods, query);
    
    function onNewText(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query23={query} query23Changed={onNewText}/>
            <hr />
            <List items={foods11} />
        </>
    );
}

function SearchBar({query23, query23Changed}) {
    
    return (
        <label>
            Search:{' '}
            <input value={query23} onChange={query23Changed} />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                { items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
}
