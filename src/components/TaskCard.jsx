import taskCardStyles from "@/styles/TaskCard.module.scss";

const TaskCard = () => {
  return (
    <div className={taskCardStyles.card}>
      <div className={taskCardStyles.task_info}>
        <div>
          <p>Task: </p>
          <p>Creation of Front-end Task Management System</p>
        </div>
        <div>
          <p>Task by:</p>
          <p>Ronel Florida</p>
        </div>
        <div>
          <p>Difficulty Level:</p>
          <p>High</p>
        </div>
        <div>
          <p>Proirity Level: High</p>
          <p>High</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
