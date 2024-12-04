// components/NewsPage.js
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const NewsPage = () => {
  const news = [
    { 
      id: 1, 
      title: 'Запуск нового курса по React', 
      date: '2024-12-01', 
      content: 'Сегодня мы запускаем новый курс по React для начинающих. Этот курс поможет вам освоить основные концепции React и начать разрабатывать полноценные веб-приложения.',
      image: 'https://www.reactjs.org/logo-og.png' // Логотип React
    },
    { 
      id: 2, 
      title: 'Обновление редактора кода', 
      date: '2024-11-25', 
      content: 'Добавлены новые функции для редактора кода JS, улучшена производительность и добавлена поддержка нескольких языков программирования. Теперь работать с редактором стало удобнее и быстрее.',
      image: 'https://grand-seo.ru/wp-content/uploads/2019/09/iskhodnyj-kod.jpg' // Фото рабочего стола с кодом (из Unsplash)
    },
    { 
      id: 3, 
      title: 'Поддержка новых языков программирования', 
      date: '2024-11-10', 
      content: 'Мы добавили поддержку новых языков программирования в наш редактор. Теперь вы можете работать не только с JavaScript, но и с Python, Java, и многими другими языками.',
      image: 'https://decode.kz/images/blog/648078d2c47b75ea80d42f21.png' // Изображение компьютера с кодом (из Unsplash)
    },
    { 
      id: 4, 
      title: 'Новые курсы по веб-разработке', 
      date: '2024-10-30', 
      content: 'Мы запустили новый курс по фронтенд-разработке, который охватывает HTML, CSS и JavaScript, а также работу с популярными фреймворками.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9Z4K2UrxLTqKIvbHNsb_g1UsbLFzE-YtUw&s' // Фото разработки веб-сайтов (из Unsplash)
    },
    { 
      id: 5, 
      title: 'Партнерство с ведущими IT-компаниями', 
      date: '2024-10-15', 
      content: 'Наши курсы теперь поддерживаются крупнейшими IT-компаниями. Мы рады объявить, что наши студенты смогут получить стажировки и работу в ведущих технологических компаниях.',
      image: 'https://klever.blog/wp-content/uploads/2018/05/kakimi-bivaut-it-kompanii.png' // Фото сотрудников IT-компании
    },
    { 
      id: 6, 
      title: 'Обновление мобильной версии платформы', 
      date: '2024-09-25', 
      content: 'Мы обновили мобильное приложение, улучшив его интерфейс и добавив новые возможности для удобного доступа к курсам и редактору кода прямо с вашего смартфона.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NhBSSkcvfmHBstfvroqPWfE89V21Yoxgvw&s' // Мобильное приложение (из Unsplash)
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Новости</Title>
      <Row gutter={[16, 16]}>
        {news.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} style={{ height: '200px', objectFit: 'cover' }} />}
            >
              <Title level={4}>{item.title}</Title>
              <Paragraph type="secondary">{item.date}</Paragraph>
              <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Подробнее' }}>
                {item.content}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsPage;
