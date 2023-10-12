import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProps ={
  assignmentList: string[];
  assignmentCount: number;
  assignmentFinished: number;
  updateFinishedAssignment: ()=>void;
  handleRemoveAssignment: (assignmentId: number, isFinished: boolean) => void;
}

export function Assignments(props : AssignmentsProps ) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{props.assignmentCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{props.assignmentFinished} of {props.assignmentCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {props.assignmentList.map((value, idx)=>(
          <Assignment 
                id = {idx}
                assignmentName = {value} 
                key={idx}  
                assignmentCount={props.assignmentCount} 
                assignmentFinished = {props.assignmentFinished} 
                updateFinishedAssignment ={ props.updateFinishedAssignment}
                handleRemoveAssignment = { props.handleRemoveAssignment }/>
                
        ))}
        
      </div>
    </section>
  );
}
