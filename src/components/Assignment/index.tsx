import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type AssignmentProps={
  id:number;
  assignmentName: string;
  assignmentCount: number;
  assignmentFinished: number;
  updateFinishedAssignment: ()=>void;
  handleRemoveAssignment: (assignmentId: number, isFinished: boolean) => void;
}



export function Assignment( props: AssignmentProps ) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleFinishAssignmentButton =() => {
    
    props.updateFinishedAssignment();
    setIsButtonDisabled(true);
  }




  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={ handleFinishAssignmentButton } disabled={isButtonDisabled}>
        {isButtonDisabled ? (<BsCheckCircleFill size={20}/>) : (<div />) } 
      </button>

      <p className={ isButtonDisabled? styles.textCompleted  : ""}>{props.assignmentName}</p>

      <button className={styles.deleteButton} onClick={ ()=> props.handleRemoveAssignment(props.id, isButtonDisabled) }>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
