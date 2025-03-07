import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <section>
                    <div className="container">
                        <div className="footer-info">
                            <div className="img-f">
                                {/* <img style={{ maxHeight: '200px', maxWidth: '200px', borderRadius: "50px" }} src={logo} alt="" /> */}
                            </div>
                            <div className="first-list">
                                <div className="list-title">Туристам</div>
                                <a className='a text' href="#">Новости</a>
                                <a className='a text' href="#">Наши Контакты</a>
                                <a className='a text' href="#">О нас</a>
                                <a className='a text' href="#">Отзывы</a>
                            </div>
                            <div className="second-list">
                                <div className="list-title">Агенствам</div>
                                <a className='a text' href="#">Сотруднечество</a>
                                <a className='a text' href="#">Выдача документов</a>
                                <a className='a text' href="#">Вопросы и ответы</a>
                                <a className='a text' href="#">Нам пишут</a>
                            </div>
                            <div className="third-list">
                                <div className="list-title">О компании</div>
                                <a className='a text' href="#">О нас</a>
                                <a className='a text' href="#">Контакты</a>
                                <a className='a text' href="#">Наши партнеры</a>
                                <a className='a text' href="#">Вакансии</a>
                                <a className='a text' href="#">Новостной центр</a>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer
