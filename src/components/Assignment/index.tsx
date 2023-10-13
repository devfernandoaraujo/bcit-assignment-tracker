import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type AssignmentProps={
  assignment: {name: string, id: string, finished: boolean};
  assignmentCount: number;
  assignmentFinished: number;
  updateFinishedAssignment: (assignmentId: string)=>void;
  handleRemoveAssignment: (assignmentId: string, isFinished: boolean) => void;
}



export function Assignment( props: AssignmentProps ) {
  
  const handleFinishAssignmentButton =(assignmentId: string) => {
    props.updateFinishedAssignment(assignmentId);
  }




  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=> handleFinishAssignmentButton(props.assignment.id) } disabled={props.assignment.finished}>
        {props.assignment.finished ? (<BsCheckCircleFill size={20}/>) : (<div />) } 
      </button>

      <p className={ props.assignment.finished? styles.textCompleted  : ""}>{props.assignment.name}</p>

      <button className={styles.deleteButton} onClick={ ()=> props.handleRemoveAssignment(props.assignment.id, props.assignment.finished) }>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
