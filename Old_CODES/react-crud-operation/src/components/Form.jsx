import React, { useEffect, useState } from 'react';
import { postApi, putApi } from '../api/PostApi';

const Form =
    ({
        data,
        setData,
        updateCurrentData,
        setUpdateCurrentData
    }) => {

        const [addData, setAddData] = useState({ title: "", body: "" });

        let isEmpty = Object.keys(updateCurrentData).length === 0;

        useEffect(() => {
            updateCurrentData && setAddData({
                title: updateCurrentData.title || "",
                body: updateCurrentData.body || ""
            })
        }, [updateCurrentData]);

        const handleChange = (e) => {
            const { name, value } = e.target;

            setAddData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        const addPostData = async () => {
            let res = await postApi(addData)
            if (res.status === 201) {
                setData([...data, res.data])
            }
            setAddData({ title: "", body: "" })
        }

        const updatePostData = async () => {
            try {
                const res = await putApi(updateCurrentData.id, addData);

                setData((prev) => (
                    prev.map((curElem) => {
                        return curElem.id === res.data.id ? res.data : curElem
                    })
                ));

                setAddData({ title: "", body: "" })
                setUpdateCurrentData({});

            } catch (error) {
                console.log("ERROR, updating post data", error);
            }
        }


        const handleSubmit = (e) => {
            e.preventDefault();

            const action = e.nativeEvent.submitter.value
            if (action === "Add") {
                addPostData();
            } else {
                updatePostData();
            }
        }

        return (
            <form
                onSubmit={handleSubmit}
                className="flex mb-5 items-center justify-center bg-neutral-900 p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto space-x-2"
            >
                {/* Title Field */}
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-gray-300 font-medium mb-1">
                        Title
                    </label>
                    <input
                        value={addData.title}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        placeholder="Add Title"
                        type="text"
                        name="title"
                        id="title"
                        className="px-4 py-2 border border-gray-700 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Body Field */}
                <div className="flex flex-col">
                    <label htmlFor="body" className="text-gray-300 font-medium mb-1">
                        Body
                    </label>
                    <input
                        value={addData.body}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        placeholder="Add Body"
                        type="text"
                        name="body"
                        id="body"
                        className="px-4 py-2 border border-gray-700 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    value={isEmpty ? "Add" : "Update"}
                    className="bg-orange-500 text-white font-semibold py-2 px-8 cursor-pointer outline-orange-500 border-orange-500 border mt-7 rounded-md hover:bg-orange-600 transition duration-200"
                >
                    {isEmpty ? "Add" : "Update"}
                </button>
            </form>

        );
    }

export default Form;