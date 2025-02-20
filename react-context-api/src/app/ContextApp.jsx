import React, { useState } from "react";
import { PropsProvider } from "../context/PropsContext";
import CompA from "../components/CompA";
import { Info, X } from "lucide-react";

const ContextApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = {
        name: "Mohammad Shahabuddin",
        username: "xshshahab",
        avatar: "https://github.com/xshshahab.png",
        socialLinks: [
            { icon: "Instagram", url: "https://www.instagram.com/xsh_shahab" },
            { icon: "Twitter", url: "https://www.x.com/xsh_shahab" },
            { icon: "Github", url: "https://www.github.com/xshshahab" },
            { icon: "Linkedin", url: "https://www.linkedin.com/in/mdshahabuddin82/" },
        ],
    };

    return (
        <PropsProvider value={user}>
            <div className="flex relative flex-col gap-2 items-center justify-center min-h-[50vh] bg-zinc-900 p-4">
                <div
                    className="absolute bottom-5 bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600 right-10"
                    onClick={() => setIsOpen(true)}
                >
                    <Info size={25} />
                </div>

                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
                        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">

                            <button
                                className="absolute top-3 right-3 text-gray-600 hover:text-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-lg font-bold mb-3">Context API Note</h2>
                            <p className="text-gray-300 text-sm">
                                I have created a <b>context folder</b> for using the <b>Context API</b>.
                                Inside this folder, I have created a context and provided a reference for both
                                the <b>Provider</b> and <b>Consumer</b>.
                            </p>
                            <p className="text-gray-300 text-sm mt-2">
                                <b>Note:</b> The <b>context</b> folder contains the <b>AppContext</b>,
                                where I have defined a provider that supplies data to the components.
                                The consumer components use the <b>useContext</b> hook to access this shared data.
                            </p>
                        </div>
                    </div>
                )}
                <h2 className="font-bold text-lg text-orange-500">Making This Using External Context Folder</h2>
                <CompA />
            </div>
        </PropsProvider>
    );
};

export default ContextApp;
