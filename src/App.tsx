import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from 'react';

function App() {

  const[assignmentList, setAssignmentList] = useState<string[]>([]);
  const [assignmentCount, setAssignmentCount] = useState(0);
  const [assignmentFinished, setAssignmentFinished] = useState(0);

  const handleUpdateAssignmentFinished = ()=>{
    
    setAssignmentFinished(assignmentFinished + 1);
  }

  const handleRemoveAssignmentButtonClick = (assignmentId: number, isFinished: boolean) => {
     setAssignmentList((prevList) =>
      prevList.filter((_, index) => index !== assignmentId)
    );
    if(isFinished){
        setAssignmentFinished(assignmentFinished -1);
    }

    setAssignmentCount(assignmentCount - 1);
  }

  const handleAssignmentButtonClick = (assignmentName: string) => {
     setAssignmentList((prevList) => [...prevList,assignmentName]);
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
