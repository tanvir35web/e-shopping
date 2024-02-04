// import React, { useState } from "react";

// const Modal = () => {
//     const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal);
//     };

//     return (
//         <>
//             <button
//                 onClick={toggleModal}
//                 className="px-6 py-2 bg-blue-950 text-white m-10 rounded"
//             >
//                 Modal Open
//             </button>

//             {modal && (
//                 <div className=" w-[100vw] h-[100vh] top-0 left-0 bottom-0 right-0 fixed ">
//                     <div
//                         onClick={toggleModal}
//                         className=" w-[100vw] h-[100vh] top-0 left-0 bottom-0 right-0 fixed bg-gray-900 bg-opacity-80"
//                     ></div>
//                     <div className="bg-gray-200 p-5 py-6 rounded-lg absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
//                         <p>
//                             {  }
//                         </p>
//                         <button
//                             onClick={toggleModal}
//                             className="px-6 py-2 bg-blue-950 text-white mt-10 rounded "
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Modal;

import React, { useState } from "react";

const Modal = ({ isOpen, toggleModal, children }) => {
    return (
        <>
            {isOpen && (
                <div className=" w-screen h-screen top-0 left-0 fixed ">
                    <div
                        onClick={toggleModal}
                        className=" w-screen h-screen top-0 left-0 fixed bg-gray-900 bg-opacity-80"
                    ></div>
                    <div className="bg-gray-200 p-5 py-6 rounded-lg absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        {children}
                        <button
                            onClick={toggleModal}
                            className="px-6 py-2 bg-blue-950 text-white mt-6 rounded "
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
