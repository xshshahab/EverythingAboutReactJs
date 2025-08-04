import React from 'react'

const TodoItems = () => {

    const data = [
        {
            id: 1,
            title: 'Buy milk',
            date: "12/10/2020"
        },
        {
            id: 2,
            title: 'Buy eggs',
            date: "12/10/2020"
        }
    ]

    return (
        <div className="flex p-2 mt-2 row">
            {
                data.map((dt) => {
                    return <div key={dt.id} style={{ display: "flex", alignItems: "center", border: "2px solid gray", borderRadius: "10px", marginBottom: "10px" }}>
                        <div className="p-2 border col-6">
                            <h5>{dt.title}</h5>
                        </div>
                        <div className="p-2 border col-4">
                            <p>{dt.date}</p>
                        </div>
                        <div className="p-2 border col-2">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default TodoItems