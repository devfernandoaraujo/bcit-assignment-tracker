import { Header } from "./components/Header";
import { Assignments, AssignmentObject } from "./components/Assignments";
import {useState} from 'react';

function App() {

  const[assignmentList, setAssignmentList] = useState<AssignmentObject[]>([]);
  const [assignmentCount, setAssignmentCount] = useState(0);
  const [assignmentFinished, setAssignmentFinished] = useState(0);

  const handleUpdateAssignmentFinished = (assignmentId: string)=>{
    setAssignmentList((prevList) =>
    prevList.map((assignment) => {
      if (assignment.id === assignmentId) {
        return { ...assignment, finished: true };
      }
      return assignment;
    })
  );
    setAssignmentFinished(assignmentFinished + 1);
  }

  const handleRemoveAssignmentButtonClick = (assignmentId: string, isFinished: boolean) => {
    
     setAssignmentList((prevList) =>
      prevList.filter((item) => item.id !== assignmentId)
    );

    if(isFinished){
        setAssignmentFinished(assignmentFinished -1);
    }

    setAssignmentCount(assignmentCount - 1);
  }

  const handleAssignmentButtonClick = (assignment: AssignmentObject) => {
     setAssignmentList((prevList) => [...prevList,assignment]);
     setAssignmentCount(assignmentCount + 1);
  }
  return (
    <>
      <Header handleAssignmentButtonClick={handleAssignmentButtonClick} />
      <Assignments 
        assignmentList={assignmentList} 
        assignmentCount={assignmentCount} 
        assignmentFinished = {assignmentFinished} 
        updateFinishedAssignment = {handleUpdateAssignmentFinished}
        handleRemoveAssignment={handleRemoveAssignmentButtonClick}
        />
    </>
  );
}



export default App;
