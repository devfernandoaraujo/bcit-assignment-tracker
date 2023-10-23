import styles from "./assignment.module.css";
import { useEffect } from 'react';
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type AssignmentProps={
  assignment: {name: string, id: string, finished: boolean, dueDate: Date};
  assignmentCount: number;
  assignmentFinished: number;
  updateFinishedAssignment: (assignmentId: string)=>void;
  handleRemoveAssignment: (assignmentId: string, isFinished: boolean) => void;
}



export function Assignment( props: AssignmentProps ) {
  
  const [dueDateColor, setDueDateColor] = useState<string>(styles.dueDateOnTime);
  const [dueDateMessage, setDueDateMessage] = useState<string>("")


  const handleFinishAssignmentButton =(assignmentId: string) => {
    props.updateFinishedAssignment(assignmentId);
  }

  useEffect(() => {
  const dueDate = props.assignment.dueDate;
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const Difference_In_Time = dueDate.getTime() - date.getTime(); 
    

    const Days = Math.floor(Difference_In_Time / (1000 * 60 * 60 * 24)); 

    console.log(props.assignment.dueDate);
   
    if(Days === 1){
      setDueDateColor(styles.dueDateTomorrow);
      setDueDateMessage(`Due: Tomorrow`);
    }
    else if(Days === 0){
      setDueDateMessage(`Due: Today`);
      setDueDateColor(styles.dueDateToday);
    }
    else if (Days < 0){
      setDueDateMessage(`Has passed the due date`);
      setDueDateColor(styles.dueDatePast);
    }
    else {
      setDueDateMessage(`Due: ${ Days } days`);
      setDueDateColor(styles.dueDateOnTime);
    }
        
}, [props.assignment.dueDate]);
 

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=> handleFinishAssignmentButton(props.assignment.id) } disabled={props.assignment.finished}>
        {props.assignment.finished ? (<BsCheckCircleFill size={20}/>) : (<div />) } 
      </button>

      <p className={ props.assignment.finished? styles.textCompleted  : ""}>{props.assignment.name} <span className={ dueDateColor }>{ dueDateMessage }</span></p>

      <button className={styles.deleteButton} onClick={ ()=> props.handleRemoveAssignment(props.assignment.id, props.assignment.finished) }>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
