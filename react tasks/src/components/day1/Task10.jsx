function Task10() {
  const students = ["student1", "student2", "student3", "student4"];
  return (
    <ul>
      {students.map((student) => (
        <li style={{display: "flex", justifyContent:"center" , backgroundColor: "orange" , color:"white" , width:"200px" , margin:"10px"}}>{student}</li>
      ))}
    </ul>
  );
}

export default Task10;