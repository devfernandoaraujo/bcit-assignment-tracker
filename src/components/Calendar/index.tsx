import { ClassNames, DayPicker } from 'react-day-picker';
import styles from './calendar.module.css';

interface CalendarProps {
   selected: Date | undefined;
   onSelect: (date: Date) => void;
}

export default function Calendar(props: CalendarProps){
  const classNames: ClassNames = {
    ...styles
  };
    return (
    <>
      <DayPicker
        mode="single"
        selected={props.selected}
        onSelect={props.onSelect}
        classNames={classNames}
      />
    </>
  );
}