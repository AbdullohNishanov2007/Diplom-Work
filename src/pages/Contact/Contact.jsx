import React, { useState } from 'react';
import { FaTelegram, FaInstagram, FaVk, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  width: 80%;
  max-width: 500px;
  padding: 30px;
  border-radius: 8px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: #2c2c2c;
  border-radius: 5px;
  padding: 10px;
`;

const Icon = styled(MdEmail)`
  margin-right: 10px;
  font-size: 1.2em;
  color: #bbb;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 0;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1em;
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 1em;
  outline: none;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px;
  display: flex;
`;

const SocialLink = styled.a`
  margin: 0 15px;
  color: #bbb;
  font-size: 1.5em;
  transition: color 0.3s ease;
  text-decoration: none;
`;

const TelegramIcon = styled(FaTelegram)`
  font-size: 1.8em;
  transition: color 0.3s ease;
  &:hover {
    color: #229ED9;
  }
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 1.8em;
  transition: color 0.3s ease;
  &:hover {
    color: #E1306C;
  }
`;

const VkIcon = styled(FaVk)`
  font-size: 1.8em;
  transition: color 0.3s ease;
  &:hover {
    color: #2787F5;
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  font-size: 1.8em;
  transition: color 0.3s ease;
  &:hover {
    color: #25D366;
  }
`;

const FacebookIcon = styled(FaFacebook)`
  font-size: 1.8em;
  transition: color 0.3s ease;
  &:hover {
    color: #1877F2; // Цвет Facebook
  }
`;

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/send-telegram-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message); // Показать сообщение об успехе
        setEmail('');
        setMessage('');
      } else {
        alert(data.message); // Показать сообщение об ошибке
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке сообщения.');
    }
  };

  return (
    <Container>
      <Heading>Свяжитесь со мной</Heading>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Icon />
          <Input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Textarea
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Отправить сообщение</Button>
      </Form>
      <SocialIcons>
        <SocialLink href="https://web.telegram.org/k/@abdulla345bot" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/comtehno.kg/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <VkIcon />
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/comtehno.kg/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon /> {/* Добавили иконку Facebook */}
        </SocialLink>
        {/* Добавьте другие иконки по аналогии */}
      </SocialIcons>
    </Container>
  );
};

export default ContactPage;