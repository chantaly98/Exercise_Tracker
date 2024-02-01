import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit]         = useState('lbs');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name,reps,weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the Exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add a New Exercise</h2>
            <p>Please fill out all portions of the form. Add all the details about your workout
                and then you can save your new entry to the table.
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Add a Exercise</legend>
                    <label for="name">Exercise Name</label>                
                    <input
                        type="text"
                        placeholder="Name of Exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    

                    <label for="reps">Reps Finished</label>
                    <input
                        type="number"
                        placeholder="0"
                        min="0"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight lifted</label>
                    <input
                        type="number"
                        placeholder="0"
                        min="0"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Units weight is measured in</label>
                    <select name="unit" id="unit" onChange={e => setUnit(e.target.value)} required>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                    </select>

                    <label for="date">Date of exercise</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;