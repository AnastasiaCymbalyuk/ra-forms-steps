import React from "react";

export default function List({ state, onDelete }) {
    const arr = state;
    arr.sort(function(a,b) {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    });
    arr.reverse();
    return (
        <div className="box_list">
            <div className="box_title">
                <h4>Дата (ДД.ММ.ГГ)</h4>
                <h4>Пройдено км</h4>
                <h4>Действия</h4>
            </div>
            <ul className="list">
                {state.map((item) => {
                    return (
                        <li className="list_item" key={item.id}>
                            <div>{item.date}</div>
                            <div>{item.distance}</div>
                            <div onClick={ onDelete(item.id) }>✘</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}