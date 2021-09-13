import { useState } from "react";
interface initValue {
    initOpen?: boolean;
}
const useModal = (props ?:initValue) =>{
    const[open, setOpen] = useState(props?.initOpen || false);
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const toggleDown = () => {
        setOpen((prevState) => !prevState)
    };
    return{open , onOpen, onClose , toggleDown};
};
export default useModal;