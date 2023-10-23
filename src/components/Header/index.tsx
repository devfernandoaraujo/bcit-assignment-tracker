import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { uppercase } from "../../helpers/stringHelpers";
import { AssignmentObject } from "../Assignments";
import {useState} from "react";
import Calendar from '../Calendar';
import styles from "./header.module.css";

interface HeaderProps {
  handleAssignmentButtonClick: (assignment: AssignmentObject) => void;
}

export function Header(props: HeaderProps) {
  const [assignmentValue, setAssignmentValue] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState<boolean>(false)

  const handlerAssignmentValue = ( e : React.ChangeEvent<HTMLInputElement>) => {
      
      setAssignmentValue(e.target.value);
  }

  const handleAssignmentButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
     e.preventDefault();
     const newAssignment = { name: assignmentValue, id: crypto.randomUUID(), dueDate:  selectedDate };
     props.handleAssignmentButtonClick(newAssignment);
     setAssignmentValue('');
     
  }

  const handleShowCalendarButtonClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setShowCalendar(!showCalendar);
  }

  const handleSelectCalendarDate=(date : Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  }

  const isSubmitButtonEnabled =() =>{
    return (assignmentValue.trim() === '' || selectedDate === undefined)
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form  className={styles.newAssignmentForm}>
        <input onChange={handlerAssignmentValue} value= {assignmentValue} placeholder="Add a new assignment" type="text" />
        
        <div>
          <button type="button" className={styles.headerButton} onClick={ handleShowCalendarButtonClick } aria-label="Open calendar" >
            <BsFillCalendar2DateFill size={20} />
          </button>
          {showCalendar && (
              <div className={styles.newAssignmentCalendar}>
                  <Calendar selected={selectedDate} onSelect={handleSelectCalendarDate} />
              </div>
          )}
            
        </div>
        
        <button type="submit" className={styles.headerButton} disabled={ isSubmitButtonEnabled() } onClick={ handleAssignmentButtonClick } >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

