// components/CodeEditor.js
import React, { useState } from 'react';
import { Button, Input, Alert, Card } from 'antd';
import { PlayCircleOutlined, LoadingOutlined, CloseCircleOutlined } from '@ant-design/icons';  // Импортируем иконки
const { TextArea } = Input;

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false); // Состояние для отображения иконки загрузки

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    setIsRunning(true); // Устанавливаем флаг начала выполнения
    try {
      // Выполняем код и получаем результат
      const output = eval(code); // Для простоты используем eval, но будьте осторожны с eval в реальных проектах!
      setResult(output);
      setError(null); // Сбрасываем ошибку, если выполнение прошло успешно
    } catch (err) {
      setError(err.message); // Если произошла ошибка, показываем сообщение об ошибке
      setResult(null); // Очищаем предыдущий результат
    } finally {
      setIsRunning(false); // Устанавливаем флаг завершения выполнения
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '20px' }}>
      <Card title="Редактор кода JS" bordered={false} style={{ backgroundColor: '#f0f2f5', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <TextArea
          value={code}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '180px',
            border: '1px solid #ddd',
            padding: '15px',
            fontFamily: 'monospace',
            fontSize: '16px',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
            boxSizing: 'border-box',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            resize: 'none',
          }}
          placeholder="Напишите свой код здесь..."
        />
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Button
            type="primary"
            onClick={handleRunCode}
            icon={isRunning ? <LoadingOutlined spin /> : <PlayCircleOutlined />}  // Иконка запуска или загрузки
            style={{
              padding: '12px 30px',
              backgroundColor: '#1890ff',
              border: 'none',
              color: 'white',
              borderRadius: '6px',
              fontSize: '16px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#40a9ff')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1890ff')}
          >
            Выполнить
          </Button>
        </div>
      </Card>

      {/* Результат выполнения кода */}
      {result !== null && (
        <Card
          title="Результат"
          bordered={false}
          style={{
            marginTop: '30px',
            backgroundColor: '#e6f7ff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '14px' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </Card>
      )}

      {/* Ошибка выполнения кода */}
      {error && (
        <Alert
          message={<><CloseCircleOutlined style={{ marginRight: '8px' }} /> Ошибка выполнения</>}  // Иконка ошибки
          description={error}
          type="error"
          showIcon
          style={{
            marginTop: '20px',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#fff2f0',
            borderColor: '#ff4d4f',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
      )}
    </div>
  );
};

export default CodeEditor;
