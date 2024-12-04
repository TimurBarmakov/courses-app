import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const CertificatesPage = () => {
  // Пример данных для сертификатов, их можно динамически получать
  const certificates = [
    { id: 1, title: 'Сертификат Python для начинающих', issuedBy: 'Education Platform', issueDate: '2024-11-01' },
    { id: 2, title: 'Сертификат по JavaScript', issuedBy: 'Web Academy', issueDate: '2024-09-15' },
    { id: 3, title: 'Сертификат по React', issuedBy: 'React Training', issueDate: '2024-08-25' },
  ];

  return (
    <div>
      <h2>Мои Сертификаты</h2>
      <Row gutter={[16, 16]}>
        {certificates.map(cert => (
          <Col span={8} key={cert.id}>
            <Card
              title={cert.title}
              extra={<Link to={`/certificate/${cert.id}`}>Подробнее</Link>}
              hoverable
            >
              <p><strong>Выдано:</strong> {cert.issuedBy}</p>
              <p><strong>Дата выдачи:</strong> {cert.issueDate}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificatesPage;
