import React, { useContext } from "react";
import TodoContext from "../../contexts/todo.context";

import styles from "./TodoStatistics.module.scss";

interface Props {}

const TodoStatistics = (props: Props) => {
  const { statistics } = useContext(TodoContext);

  return (
    <div className={styles.statistics_wrap}>
      <div>Total: <span className={styles.stat_count}>{statistics.total}</span></div>
      <div>Done: <span className={styles.stat_count}>{statistics.doneCount}</span></div>
      <div>Change:<span className={styles.stat_count}>{statistics.changes}</span></div>
    </div>
  );
};

export default TodoStatistics;
