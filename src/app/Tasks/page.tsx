import React from "react";
import SocialsPage from "./Socials/page";
const page = () => {
  return (
    <SocialsPage/>
  );
};
export default page;

// interface modalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// const Modal = ({ isOpen, onClose, children }: modalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-container">
//       <div className="modal-content">
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };
