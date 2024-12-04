import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <Row gutter={[16, 16]}> {/* Добавлены отступы по вертикали и горизонтали */}
      {courses.map((course) => (
        <Col span={8} key={course.id}>
          <Link to={`/course/${course.id}`}>
            <Card
              title={course.title}
              extra={<span>Подробнее</span>}
              hoverable
            >
              <p>{course.description}</p>
              <p><strong>Автор:</strong> {course.author}</p>
              <p><strong>Продолжительность:</strong> {course.duration}</p>
              <p><strong>Уровень:</strong> <Tag>{course.level}</Tag></p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
