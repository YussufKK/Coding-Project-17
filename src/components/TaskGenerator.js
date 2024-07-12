import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => prevIndex + 1);
  };

  const currentTask = tasks[currentTaskIndex];

  return (
    <div>
      <FancyText title={true} text="Your Task for Today:" />
      <div>
        <FancyText title={false} text={currentTask.name} />
        <p>{currentTask.isCompleted ? 'Completed ✔' : 'Pending'}</p>
        <button onClick={handleNextTask}>Next Task</button>
      </div>
    </div>
  );
};

export default TaskGenerator;
