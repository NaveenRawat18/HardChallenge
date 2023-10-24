// // Dashboard.js
// import React, { useState } from 'react';
// import { Calendar } from 'react-big-calendar';
// import moment from 'moment';
// import Checklist from './Checklist';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = Calendar.momentLocalizer(moment);

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newTask, setNewTask] = useState('');

//   const handleTaskToggle = (index, isCompleted = false) => {
//     const taskToToggle = isCompleted ? completedTasks : tasks;
//     taskToToggle[index].completed = !taskToToggle[index].completed;
//     isCompleted ? setCompletedTasks([...taskToToggle]) : setTasks([...taskToToggle]);
//   };

//   const handleCreateChecklist = (date) => {
//     setSelectedDate(date);
//     setTasks([]);
//   };

//   const handleAddTask = () => {
//     if (newTask) {
//       setTasks([...tasks, { name: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>User Dashboard</h1>
//       <Calendar
//         localizer={localizer}
//         events={completedTasks}
//         defaultView="month"
//         views={['month', 'week', 'day']}
//         selectable
//         onSelectSlot={(slotInfo) => handleCreateChecklist(slotInfo.start)}
//       />
//       <div>
//         <p>Selected Date: {selectedDate ? moment(selectedDate).format('MMMM D, YYYY') : 'None'}</p>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <Checklist tasks={tasks} onTaskToggle={(index) => handleTaskToggle(index)} label="Incomplete Tasks" />
//       <Checklist
//         tasks={completedTasks}
//         onTaskToggle={(index) => handleTaskToggle(index, true)}
//         label="Completed Tasks"
//       />
//     </div>
//   );
// };

// export default Dashboard;
