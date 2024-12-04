import React from 'react';
import { Progress, Typography } from 'antd';

const ProgressComponent = ({ lessons }) => {
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const percent = (completedLessons / totalLessons) * 100;

  return (
    <div>
      <Typography.Title level={3}>Прогресс</Typography.Title>
      <Progress percent={percent} />
      <p>{completedLessons} из {totalLessons} уроков завершено</p>
    </div>
  );
};

export default ProgressComponent;
