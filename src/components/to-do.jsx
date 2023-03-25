import React, { useEffect, useState } from "react";

export const ToDo = () => {

    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [todoArr, setTodoArr] = useState([]);

    console.log(what);
    console.log(when);

    useEffect(() => {
        setTodoArr(what + " " + when);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!")
    };

    const ToDoList = () => {
        return (
            <ul className="list-group">
                <li className="list-group-item rounded-0 border">This is a fictional list item.</li>
                {
                    !todoArr && todoArr.map((elem) => {
                        return (
                            <li>{elem}</li>
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
                        <input className="form-control rounded-0 border" id="what" type="text" onChange={(e) => setWhat(e.target.value)} />
                    </div>
                    <div className="col-6 form-group">
                        <label className="float-start pb-2" htmlFor="when">When: </label>
                        <input className="form-control rounded-0 border" id="when" type="text" onChange={(e) => setWhen(e.target.value)} />
                    </div>

                    <div className="col-12 my-3">
                        <button className="btn rounded-0 border w-100" onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="col">
                        <h4>ToDo List: </h4>
                        <ToDoList />
                    </div>
                </div>
            </div>
        </form>
    )
}