import React, { useEffect, useState, useRef } from 'react';
import { deleteApi, getApi } from '../api/PostApi';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';
import Form from './Form';
import LoadingBar from 'react-top-loading-bar';
import Spinner from '../spinner/Spinner';

const Posts = () => {
    const [data, setData] = useState([]);
    const [updateCurrentData, setUpdateCurrentData] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loadingBarRef = useRef(null);

    const getApiData = async () => {
        if (data.length >= 100) return;
        setLoading(true);
        loadingBarRef.current.continuousStart();

        try {
            const response = await getApi();
            const paginatedData = response.data.slice((page - 1) * 10, page * 10);
            setData((prevData) => [...prevData, ...paginatedData]);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
            loadingBarRef.current.complete();
        }
    };

    useEffect(() => {
        getApiData();
    }, [page]);

    const handleDelete = async (id) => {
        try {
            const delRes = await deleteApi(id);
            if (delRes.status === 200) {
                setData(data.filter(dt => dt.id !== id));
            } else {
                console.log("Network ERROR with status code: ", delRes.status);
            }
        } catch (error) {
            console.log("ERROR coming from Delete fn.", error);
        }
    };

    const handleEdit = (dt) => setUpdateCurrentData(dt);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && !loading && data.length < 100) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [data]);

    return (
        <main className="bg-zinc-950 min-h-screen py-10 px-5">
            <LoadingBar color="orange" ref={loadingBarRef} />
            <Form
                data={data}
                setData={setData}
                updateCurrentData={updateCurrentData}
                setUpdateCurrentData={setUpdateCurrentData}
            />
            <h1 className="text-3xl font-bold pl-6 text-orange-500 mb-5">
                Latest Posts
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
                {data.map((dt) => (
                    <div
                        key={dt.id}
                        className="relative text-white shadow-lg rounded-lg p-5 border-l-4 border-orange-500 transition duration-300 
                                    odd:bg-neutral-900 even:bg-gray-950 hover:scale-[1.02] hover:shadow-orange-500/30"
                    >
                        <p className="text-neutral-300 text-sm font-semibold">
                            <span className="text-green-300">ID:</span> {dt.id}
                        </p>
                        <h2 className="text-lg capitalize font-semibold mt-2">
                            <span className="text-sky-400">Title:</span> {dt.title}
                        </h2>
                        <p className="text-neutral-300 capitalize mt-3">
                            <span className="font-medium text-violet-400">Body:</span> {dt.body}
                        </p>
                        <div id="button" className="flex mt-10 gap-3">
                            <button
                                id="edit"
                                onClick={() => handleEdit(dt)}
                                className="bg-zinc-700 rounded-md p-2 cursor-pointer w-10 h-10 flex items-center justify-center 
                                    hover:bg-zinc-600 transition duration-300"
                            >
                                <RiEdit2Fill size={20} className="text-white hover:text-green-400 transition duration-300" />
                            </button>

                            <button
                                id="delete"
                                onClick={() => handleDelete(dt.id)}
                                className="bg-zinc-700 rounded-md p-2 cursor-pointer w-10 h-10 flex items-center justify-center 
                                    hover:bg-zinc-600 transition duration-300"
                            >
                                <FaTrashAlt size={20} className="text-white hover:text-red-400 transition duration-300" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            {loading && data.length < 100 && <div className="text-center text-white my-8">
                <Spinner />
            </div>}
        </main>
    );
};

export default Posts;
