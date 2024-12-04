import React from 'react';
import { Card, Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>Добро пожаловать в наше образовательное приложение!</Title>
      <Paragraph>
        Мы предлагаем курсы по программированию, дизайну, математике и многому другому. Наши курсы
        подходят как для новичков, так и для более опытных пользователей.
      </Paragraph>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Интерактивные курсы" bordered={false}>
            Наши курсы включают теоретические материалы, видеуроки и практические задания.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Доступность" bordered={false}>
            Мы поддерживаем гибкий график обучения, и вы можете проходить курсы в удобное для вас
            время.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Простота использования" bordered={false}>
            Интерфейс приложения интуитивно понятен, и мы предоставляем всю необходимую помощь на
            каждом этапе.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;