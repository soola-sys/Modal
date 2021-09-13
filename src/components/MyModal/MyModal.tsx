import React from "react";
import {ReactComponent as CloseIcon} from "../../assets/cancel.svg";
import styles from "./MyModal.module.scss";

interface Props {
    open:boolean;
    onClose: () => void;
    children?:React.ReactNode;
    title?:string;
    actions?:{
      cancel?:{
        text: string;
        onCancel:() => void;
      };
      submit?:{
        text:string;
        onSubmit:() => void;
      };
    };
}
const MyModal = ({open,onClose,children,title , actions}: Props) => {
    return open ?(
      <div className={styles.wrapper} >
        <div className={styles.wrapper__content}>
            <div className={styles.wrapper__header}>
              <span>{title}</span>
              <div className={styles.wrapper__icon}>
                <CloseIcon onClick={onClose} className={styles.svg}/>
              </div>
            </div>
           <div>{children}</div> 
           {actions && (
             <div>
              {actions.cancel && ( 
              <button onClick={actions.cancel.onCancel}>
                {actions.cancel.text}</button>
                )}

              {actions.submit && (
              <button onClick={actions.submit.onSubmit}>
                {actions.submit.text}</button>
                )}
           </div>
            )}
        </div>
      </div>
    ):null;
  };
  export default MyModal;