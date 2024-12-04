import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import { Layout, Menu } from 'antd';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import HomePage from './components/HomePage';  // Импортируем новый компонент
import coursesData from './assets/courses.json';
import CodeEditor from './components/CodeEditor';
import NewsPage from './components/NewsPage'; 
import EventCalendar from './components/EventCalendar';  // Новый компонент

const { Header, Content } = Layout;

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData.courses);
  }, []);

  return (
    <Router>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Главная</Link> {/* Ссылка на главную страницу */}
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/courses">Курсы</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/editor">Редактор кода JS</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/news">Новости</Link>  {/* Новая вкладка */}
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/calendar">Календарь событий</Link>  {/* Новая вкладка */}
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />  {/* Добавляем маршрут для главной страницы */}
            <Route path="/courses" element={<CourseList courses={courses} />} />
            <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />
            <Route path="/editor" element={<CodeEditor />} />  {/* Маршрут для редактора кода */}
            <Route path="/news" element={<NewsPage />} />  {/* Новый маршрут */}
            <Route path="/calendar" element={<EventCalendar />} />  {/* Новый маршрут */}

          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;