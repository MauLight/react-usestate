import React, { useState } from "react";

const GoalForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({ goal: "", by: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ goal: "", by: "" });
    };

    return (
        <div className="col">
            <h1>Goals</h1>
            <form>
                <input className="form-control rounded-0 border" type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={handleChange} />
                <input className="form-control rounded-0 border" type="text" name="by" placeholder="By.." value={formData.by} onChange={handleChange} />
                <button className="btn rounded-0 border w-100" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

const GoalList = ({ allGoals }) => {
    return (
        <ul className="list-group">
            {
                allGoals.map((elem) => (
                    <li className="list-group-item" key={elem.goal}><span>My goal is to {elem.goal}, by {elem.by}</span></li>
                ))
            }
        </ul>
    )
}

export const ToDo2 = () => {

    const [allGoals, setAllGoals] = useState([]);

    const addGoal = (goal) => {
        setAllGoals([...allGoals, goal]);
    }

    return (
        <div>
            <GoalForm onAdd={addGoal} />
            <GoalList allGoals={allGoals} />
        </div>
    )
}