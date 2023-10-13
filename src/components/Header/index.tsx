import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentObject } from "../Assignments";
import {useState} from "react";

interface HeaderProps {
  handleAssignmentButtonClick: (assignment: AssignmentObject) => void;
}

export function Header(props: HeaderProps) {
  const [assignmentValue, setAssignmentValue] = useState<string>('');

  const handlerAssignmentValue = ( e : React.ChangeEvent<HTMLInputElement>) => {
      
      setAssignmentValue(e.target.value);
  }

  const handleAssignmentButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
     e.preventDefault();
     const newAssignment = { name: assignmentValue, id: crypto.randomUUID() };
     props.handleAssignmentButtonClick(newAssignment);
     setAssignmentValue('');
     
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form  className={styles.newAssignmentForm}>
        <input onChange={handlerAssignmentValue} value= {assignmentValue} placeholder="Add a new assignment" type="text" />
        <button type="submit" disabled={ assignmentValue.trim() === '' } onClick={ handleAssignmentButtonClick } >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

