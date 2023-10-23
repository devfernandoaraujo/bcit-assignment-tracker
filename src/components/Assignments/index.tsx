import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";


export type AssignmentObject={
  name: string;
  id:string;
  finished:  boolean;
  dueDate: Date
}

type AssignmentsProps ={
  assignmentList: AssignmentObject[];
  assignmentCount: number;
  assignmentFinished: number;
  updateFinishedAssignment: (assignmentId: string)=>void;
  handleRemoveAssignment: (assignmentId: string, isFinished: boolean) => void;
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
        {props.assignmentList.map(({ name, id, finished, dueDate }, idx) => (
          <Assignment
            assignment={{ name, id, finished, dueDate }}
            key={idx}
            assignmentCount={props.assignmentCount}
            assignmentFinished={props.assignmentFinished}
            handleRemoveAssignment={props.handleRemoveAssignment}
            updateFinishedAssignment={props.updateFinishedAssignment}
          />
        ))}
        
      </div>
    </section>
  );
}
