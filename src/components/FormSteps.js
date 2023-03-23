import React, {useState} from "react";
import List from "./List";
import shortid from 'shortid';

const INIT_FORM = {date: '', distance: ''};

export default function FormSteps() {
    const [form, setForm] = useState(INIT_FORM);
    const [state, setState] = useState([]);

    const hendlerSubmit = (e) => {
        e.preventDefault();
        const checkRepeat = state.findIndex((item) => item.date === form.date);
        if (checkRepeat !== -1) {
            state[checkRepeat].distance = Number(state[checkRepeat].distance) + Number(form.distance);
        } else {
            setState(prev => [...prev, { id: shortid.generate(), date: form.date, distance: form.distance }]);
        }
        setForm(INIT_FORM);
    }

    const hendlerDateChange = (e) => {
        setForm((prevForm) => ({...prevForm, date: e.target.value}));
    }
    
    const hendlerDistChange = (e) => {
        setForm((prevForm) => ({...prevForm, distance: e.target.value}));
    }

    const handlerDelete = (id) => {
        const item = state.filter((item) => item.id !== id);
        return () => {setState(prev => item)}
    }
    
    return (
        <>
            <form className="form" onSubmit={ hendlerSubmit }>
                <div>
                    <label>Дата (ДД.ММ.ГГ)</label>
                    <input className="inp" type="text" value={form.date} name="date" onChange={ hendlerDateChange }></input>
                </div>
                <div>
                    <label>Пройдено км</label>
                    <input className="inp" type="text" value={form.distance} name="distance" onChange={ hendlerDistChange }></input>
                </div>
                <div className="box_btn">
                    <button className="btn">OK</button>
                </div>
            </form>
            {console.log(state)}
            <List state={ state } onDelete={ handlerDelete }/>
        </>
    );
}