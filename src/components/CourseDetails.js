import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Progress, Typography, Divider, Input, Radio, message } from 'antd';
import ReactPlayer from 'react-player';

const { Title, Paragraph } = Typography;

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId));
  const [progress, setProgress] = useState({});
  const [answers, setAnswers] = useState({});
  const [completedTasks, setCompletedTasks] = useState({}); // Хранение статуса задач
  const [totalTasks, setTotalTasks] = useState(0); // Общее количество задач
  const [correctAnswers, setCorrectAnswers] = useState(0); // Количество верных ответов
  const [lessonCorrectAnswers, setLessonCorrectAnswers] = useState({}); // Количество правильных ответов по урокам
  
  // Обновление прогресса при изменении ответов
  useEffect(() => {
    let total = 0;
    let correct = 0;
    let lessonAnswers = {};

    course?.lessons.forEach((lesson) => {
      lesson.tasks.forEach((task) => {
        total++;
        const userAnswer = answers[lesson.id]?.[task.id];

        if (userAnswer) {
          if (task.type === 'multiple-choice' && userAnswer === task.correctAnswer) {
            correct++;
          } else if (task.type === 'coding' && userAnswer.trim() === task.correctAnswer.trim()) {
            correct++;
          }
        }
      });

      lessonAnswers[lesson.id] = correct; // Сохраняем количество правильных ответов для каждого урока
    });

    setLessonCorrectAnswers(lessonAnswers);
    setTotalTasks(total);
    setCorrectAnswers(correct);
  }, [answers, course]);

  const handleCompleteLesson = (lessonId) => {
    if (lessonCorrectAnswers[lessonId] >= 2) {
      setProgress(prevProgress => ({
        ...prevProgress,
        [lessonId]: 100,
      }));
    } else {
      message.error('Пожалуйста, ответьте правильно на два задания перед завершением урока!');
    }
  };

  const handleAnswerChange = (lessonId, taskId, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [lessonId]: {
        ...prevAnswers[lessonId],
        [taskId]: value,
      },
    }));

    // Обновляем статус выполнения задания
    setCompletedTasks(prevCompleted => ({
      ...prevCompleted,
      [`${lessonId}-${taskId}`]: value.trim() !== '',
    }));
  };

  const handleSubmitTask = (lessonId, taskId, task) => {
    const userAnswer = answers[lessonId]?.[taskId];

    if (task.type === 'multiple-choice') {
      if (userAnswer === task.correctAnswer) {
        message.success('Ответ верный!');
      } else {
        message.error('Ответ неверный!');
      }
    } else if (task.type === 'coding') {
      if (userAnswer.trim() === task.correctAnswer.trim()) {
        message.success('Ответ верный!');
      } else {
        message.error('Ответ неверный!');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>{course?.title}</Title>
      <Paragraph>{course?.description}</Paragraph>

      {course?.lessons.map((lesson) => (
        <div key={lesson.id} style={{ marginBottom: '40px' }}>
          <Card title={lesson.title}>
            <Typography>
              <Title level={3}>Описание урока:</Title>
              <Paragraph>{lesson.description}</Paragraph>
              <Title level={4}>Продолжительность:</Title>
              <Paragraph>{lesson.duration}</Paragraph>

              <Divider />

              <Title level={4}>Контент:</Title>
              {lesson.content.map((contentItem, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  {contentItem.type === 'text' && <Paragraph>{contentItem.value}</Paragraph>}
                  {contentItem.type === 'video' && (
                    <div style={{ marginBottom: '20px' }}>
                      <ReactPlayer url={contentItem.value} controls width="100%" height={600} />
                    </div>
                  )}
                  {contentItem.type === 'code' && (
                    <div style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                      <pre>{contentItem.value}</pre>
                    </div>
                  )}
                </div>
              ))}

              <Divider />

              <Title level={4}>Задания:</Title>
              {lesson.tasks.map((task) => (
                <div key={task.id} style={{ marginBottom: '20px' }}>
                  <Typography.Text>{task.question}</Typography.Text>

                  {/* Multiple-choice task */}
                  {task.type === 'multiple-choice' && (
                    <Radio.Group
                      onChange={(e) => handleAnswerChange(lesson.id, task.id, e.target.value)}
                      value={answers[lesson.id]?.[task.id]}
                      style={{ display: 'block' }} // Добавляем display block для вертикального отображения
                    >
                      {task.options.map((option, index) => (
                        <Radio key={index} value={option}>
                          {option}
                        </Radio>
                      ))}
                    </Radio.Group>
                  )}

                  {/* Coding task */}
                  {task.type === 'coding' && (
                    <div>
                      <Input.TextArea
                        value={answers[lesson.id]?.[task.id] || ''}
                        onChange={(e) => handleAnswerChange(lesson.id, task.id, e.target.value)}
                        rows={4}
                        placeholder="Напишите ваш код здесь"
                      />
                    </div>
                  )}

                  <Button
                    type="primary"
                    onClick={() => handleSubmitTask(lesson.id, task.id, task)}
                    style={{ marginTop: '10px' }}
                  >
                    Проверить ответ
                  </Button>
                </div>
              ))}

              <Progress percent={(correctAnswers / totalTasks) * 100 || 0} />
              {progress[lesson.id] === 100 ? (
                <p>Завершено!</p>
              ) : (
                <Button
                  type="primary"
                  onClick={() => handleCompleteLesson(lesson.id)}
                  disabled={lessonCorrectAnswers[lesson.id] < 2} // Кнопка активна только если есть хотя бы два правильных ответа
                  style={{ marginTop: '10px' }}
                >
                  Завершить урок
                </Button>
              )}
            </Typography>
          </Card>
        </div>
      ))}

      <Link to="/courses">Назад к курсам</Link>
    </div>
  );
};

export default CourseDetails;