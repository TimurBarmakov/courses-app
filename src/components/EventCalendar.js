// components/EventCalendar.js
import React, { useState } from 'react';
import { Calendar, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';  // Импортируем dayjs
import { CheckCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Пример событий
  const events = [
    { date: '2024-12-05', event: 'Вебинар по React', type: 'info' },
    { date: '2024-12-10', event: 'Мастер-класс по JavaScript', type: 'success' },
    { date: '2024-12-15', event: 'Тест по программированию', type: 'warning' },
    { date: '2024-12-20', event: 'Экзамен по Python', type: 'error' },
    { date: '2024-12-25', event: 'Встреча с менторами', type: 'success' },
  ];

  // Функция для отображения событий на конкретную дату
  const getListData = (value) => {
    const date = value.format('YYYY-MM-DD');
    return events.filter(event => event.date === date);
  };

  // Выделение дня с событиями
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <div className="events" style={{ padding: '4px' }}>
        {listData.map((event, index) => (
          <div key={index} style={{ marginBottom: 4, fontSize: '14px' }}>
            <Row align="middle">
              <Col span={3}>
                {event.type === 'info' && <ClockCircleOutlined style={{ color: '#1890ff' }} />}
                {event.type === 'success' && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
                {event.type === 'warning' && <ExclamationCircleOutlined style={{ color: '#faad14' }} />}
                {event.type === 'error' && <ExclamationCircleOutlined style={{ color: '#f5222d' }} />}
              </Col>
              <Col span={21}>
                {event.event}
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  };

  // Функция, срабатывающая при выборе даты
  const onDateSelect = (value) => {
    setSelectedDate(value.format('YYYY-MM-DD'));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Календарь событий</h2>
      <Row gutter={20}>
        <Col span={16}>
          <Card
            bordered={false}
            bodyStyle={{ padding: 0 }}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px' }}
          >
            <Calendar
              dateCellRender={dateCellRender}
              onSelect={onDateSelect}
              style={{ width: '100%' }}
              fullscreen={false} // Убираем слайдеры для месяцов
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Список событий"
            bordered={false}
            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              height: '100%',
            }}
          >
            <div style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
              {events.map((event, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <Row align="middle">
                    <Col span={3}>
                      {event.type === 'info' && <ClockCircleOutlined style={{ color: '#1890ff' }} />}
                      {event.type === 'success' && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
                      {event.type === 'warning' && <ExclamationCircleOutlined style={{ color: '#faad14' }} />}
                      {event.type === 'error' && <ExclamationCircleOutlined style={{ color: '#f5222d' }} />}
                    </Col>
                    <Col span={21}>
                      <strong>{event.date}</strong>: {event.event}
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventCalendar;
