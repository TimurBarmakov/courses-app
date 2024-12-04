import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'antd';

const CertificatesDetails = () => {
  const { certificateId } = useParams();

  // Пример данных сертификатов
  const certificate = {
    id: certificateId,
    title: 'Сертификат Python для начинающих',
    issuedBy: 'Education Platform',
    issueDate: '2024-11-01',
    description: 'Этот сертификат подтверждает завершение курса Python для начинающих.',
  };

  return (
    <div>
      <h2>Подробности сертификата</h2>
      <Card
        title={certificate.title}
        extra={<Button type="primary">Скачать сертификат</Button>}
        hoverable
      >
        <p><strong>Выдано:</strong> {certificate.issuedBy}</p>
        <p><strong>Дата выдачи:</strong> {certificate.issueDate}</p>
        <p><strong>Описание:</strong> {certificate.description}</p>
      </Card>
    </div>
  );
};

export default CertificatesDetails;
