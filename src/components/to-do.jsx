import React, { useState } from "react";

export const ToDo = () => {

    const [what, setWhat] = useState("");
    const [when, setWhen] = useState("");
    const [todoArr, setTodoArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        what.length > 0 && when.length > 0 ? setTodoArr([...todoArr, what + " " + when]) : console.log("Input data on fields.");
        console.log(todoArr);
        console.log("Form submitted!");
        setWhat("");
        setWhen("");
    };

    const ToDoList = ({arr}) => {
        return (
            <ul className="list-group">
                <li className="list-group-item rounded-0 border">This is a fictional list item.</li>
                {
                    arr.map((elem, index) => {
                        return (
                            <li className="list-group-item rounded-0 border" key={index}>{elem}</li>
                        )
                    })
                }
            </ul>
        )
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="constainer mx-5">
                <div className="row mx-5">
                    <div className="col-12">
                        <h3>To-Do</h3>
                    </div>
                    <div className="col-6 form-group">
                        <label className="float-start pb-2" htmlFor="what">What: </label>
                        <input className="form-control rounded-0 border" id="what" type="text" value={what} onChange={(e) => setWhat(e.target.value)} />
                    </div>
                    <div className="col-6 form-group">
                        <label className="float-start pb-2" htmlFor="when">When: </label>
                        <input className="form-control rounded-0 border" id="when" type="text" value={when} onChange={(e) => setWhen(e.target.value)} />
                    </div>

                    <div className="col-12 my-3">
                        <button className="btn rounded-0 border w-100" onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="col">
                        <h4>ToDo List: </h4>
                        <ToDoList arr={todoArr} />
                    </div>
                </div>
            </div>
        </form>
    )
}