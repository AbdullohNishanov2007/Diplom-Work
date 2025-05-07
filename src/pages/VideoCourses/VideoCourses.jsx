// src/pages/VideoCourses.js
import React from 'react';

import './VideoCourses.css'; // Импортируем стили для страницы

import { useScrollRestoration } from '../../components/useScrollRestoration';

import js2 from '../../components/assets/Js-2.webp'

import dj from '../../components/assets/django.svg'
import js from '../../components/assets/js.jpg'
import re from '../../components/assets/re.webp'
import py from '../../components/assets/python.jpg'

import Ht1 from '../../components/assets/вёрстка-сайта.jpg' 
import H2 from '../../components/assets/Html.jpg' 
import C3 from '../../components/assets/Css.jpg' 
import AJ5 from '../../components/assets/Ajiax.jpg'

import JQ6 from '../../components/assets/JQuery.webp' 
import PHP7 from '../../components/assets/PHP-3.png' 
import PHP8 from '../../components/assets/PHP-Dinamik.webp' 
import Un9 from '../../components/assets/Unity.webp' 

import ad11 from '../../components/assets/Адаптивка.jpg'
import ua12 from '../../components/assets/unity-android.png'
import Ja13 from '../../components/assets/Java.webp'
import Un14 from '../../components/assets/Unity-3.webp'

import Cpp15 from '../../components/assets/C++.webp'
import Csh16 from '../../components/assets/Csh.webp'
import Un17 from '../../components/assets/Unity-4.webp'
import Py18 from '../../components/assets/python-1.webp'

import bo19 from '../../components/assets/Bootstrap.webp'
import un20 from '../../components/assets/Unity-5.webp'
import un21 from '../../components/assets/ush.webp'
import un22 from '../../components/assets/Unity-android-2.webp'

import cpp23 from '../../components/assets/C++-2.webp'
import un24 from '../../components/assets/Unreal.webp'
import bl25 from '../../components/assets/Blender.webp'
import va26 from '../../components/assets/Unity-Vuforia-AR.webp'

import py27 from '../../components/assets/Py-27.webp'
import Ja28 from '../../components/assets/Java-28.webp'
import C29 from '../../components/assets/C++-29.webp'
import Js30 from '../../components/assets/Node-js.webp' 

import dj31 from '../../components/assets/Django-2.svg'
import st32 from '../../components/assets/Rpg-32.webp'
import vu33 from '../../components/assets/Vue.webp'
import Ja34 from '../../components/assets/Java-34.webp'

import ru36 from '../../components/assets/Ruby-On-Rails.webp'
import PHP37 from '../../components/assets/PHP-MySQL.jpg'
import ru38 from '../../components/assets/Ruby.webp'
import js39 from '../../components/assets/Js-2.webp'

import ph40 from '../../components/assets/PhotoShop.webp'
import co41 from '../../components/assets/Corona SDK.webp'
import Sw42 from '../../components/assets/Swift.webp'
import CM43 from '../../components/assets/CMS WordPress.webp'

import un44 from '../../components/assets/Unreal44.webp'
import csh45 from '../../components/assets/csh45.webp'
import cpp46 from '../../components/assets/C++profy.webp'
import mo47 from '../../components/assets/Mongo.webp'

import ja48 from '../../components/assets/Java-2.webp'
import Pd49 from '../../components/assets/Python-Django.webp'
import vw50 from '../../components/assets/вёрстка-сайта.jpg'
import js51 from '../../components/assets/React-2.webp'

import an52 from '../../components/assets/Angular.webp'
import Bu53 from '../../components/assets/Bootstrap 4.webp'
import an54 from '../../components/assets/Andrond-chat.webp'
import Git55 from '../../components/assets/Git.webp'

import Csh56 from '../../components/assets/csh56.webp'
import an57 from '../../components/assets/Android-2.webp'
import un58 from '../../components/assets/Unity-AR.jpg'
import asp59 from '../../components/assets/csh59.webp'

import sql60 from '../../components/assets/SQL.webp'
import gu61 from '../../components/assets/Gulp-4.webp'
import sa62 from '../../components/assets/SASS.webp'
import go63 from '../../components/assets/Go.webp'

import csh64 from '../../components/assets/csh64.webp'
import un65 from '../../components/assets/Unity5.webp'
import fl66 from '../../components/assets/fl66.webp'
import c67 from '../../components/assets/С.svg'

import ja68 from '../../components/assets/ja68.webp'
import la69 from '../../components/assets/la69.webp'
import me70 from '../../components/assets/me70.webp'
import me71 from '../../components/assets/Kotlin.webp'

import do72 from '../../components/assets/do72.webp'
import fy73 from '../../components/assets/fi73.webp'
import li74 from '../../components/assets/li74.webp'
import py75 from '../../components/assets/py75.webp'

import an76 from '../../components/assets/an76.webp'
import fl77 from '../../components/assets/fl77.webp'
import re78 from '../../components/assets/re78.webp'
import go79 from '../../components/assets/go79.webp'

import py80 from '../../components/assets/py80.webp'
import ko81 from '../../components/assets/ko81.webp'
import csh82 from '../../components/assets/csh82.webp'
import wo83 from '../../components/assets/wo83.webp'

import te84 from '../../components/assets/te84.webp'
import csh85 from '../../components/assets/csh85.webp'
import cpp86 from '../../components/assets/cpp86.webp'
import os87 from '../../components/assets/os87.webp'

import un88 from '../../components/assets/un88.webp'
import re89 from '../../components/assets/re89.webp'
import so90 from '../../components/assets/so90.webp'
import ja91 from '../../components/assets/ja91.webp'

import cpp92 from '../../components/assets/cpp92.webp'
import csh93 from '../../components/assets/csh93.webp'
import un94 from '../../components/assets/un94.webp'
import py95 from '../../components/assets/py95.webp'

import js96 from '../../components/assets/js96.webp'
import ja97 from '../../components/assets/ja97.webp'
import py98 from '../../components/assets/py98.webp'
import re99 from '../../components/assets/re99.webp'

import csh100 from '../../components/assets/csh100.webp'
import ru101 from '../../components/assets/ru101.webp'
import da102 from '../../components/assets/da102.webp'
import js103 from '../../components/assets/js103.webp'

import qa104 from '../../components/assets/qa104.webp'
import js105 from '../../components/assets/js105.webp'
import da106 from '../../components/assets/da106.webp'
import py107 from '../../components/assets/py107.webp'

const VideoCourses = () => {
    useScrollRestoration();
    const courses = [
        {
            title: 'Курс по JavaScript',
            description: 'Изучите основы JavaScript и создайте свои первые веб-приложения.',
            link: '/js',
            image: js 
        },
        {
            title: 'Курс по React',
            description: 'Уроки React Js с нуля для начинающих',
            link: '/react_lesson',
            image: re 
        },
        {
            title: 'Курс по Python',
            description: 'Уроки Python для начинающих начните Python с нуля',
            link: '/python',
            image: py 
        },
        {
            title: 'Курс по Django',
            description: 'Уроки Python Django / создание сайта',
            link: '/django',
            image: dj 
        },


        {
            title: 'Вёрстка сайта',
            description: 'Верстка сайта на HTML5 и CSS3',
            link: '/Ht1',
            image: Ht1
        },
        {
            title: 'Html',
            description: 'Изучение HTML5 для начинающих!',
            link: '/H2',
            image: H2
        }, 
        {
            title: 'Css',
            description: 'Изучите Css c Нуля!',
            link: '/C3',
            image: C3
        },
        {
            title: 'Ajax',
            description: 'Изучение технологии Ajax',
            link: '/AJ5',
            image: AJ5
        },

        
        {
            title: ' jQuery ',
            description: 'Изучение библиотек jQuery',
            link: '/JQ6',
            image: JQ6
        },
        {
            title: 'PHP',
            description: 'Изучение языка PHP, а также MySQL',
            link: '/PHP7',
            image: PHP7 
        }, 
        {
            title: 'PHP',
            description: 'Создание динамического веб сайта',
            link: '/PHP8',
            image: PHP8 
        },
        {
            title: 'Unity',
            description: 'Создание игр на Unity | Для начинающих',
            link: '/Un9',
            image: Un9
        },


        {
            title: ' Адаптивка ',
            description: 'Создание адаптивного сайта ',
            link: '  /ad11  ',
            image: ad11
        }, 
        {
            title: ' Unity ',
            description: ' создание 2D игры на Android (Unity) ',
            link: ' /ua12 ',
            image: ua12
        }, 
        {
            title: ' java ',
            description: ' Язык Java для начинающих c нуля ',
            link: ' /Ja13 ',
            image: Ja13
        },
        {
            title: ' Unity 5 ',
            description: ' создание 2D игры на движке Unity 5 ',
            link: ' /Un14 ',
            image: Un14
        },


        {
            title: ' C++ ',
            description: ' C++ для начинающих с нуля ',
            link: ' /Cpp15 ',
            image: Cpp15
        }, 
        {
            title: ' C#',
            description: ' C# для начинающих с нуля ',
            link: ' /Csh16 ',
            image: Csh16
        }, 
        {
            title: ' Unity ',
            description: ' Создание игры под платформу iOS на Unity ',
            link: ' /Un17 ',
            image: Un17
        },
        {
            title: ' Python ',
            description: ' Python для начинающих с нуля',
            link: ' /Py18 ',
            image: Py18
        },


        {
            title: ' Bootstrap ',
            description: ' Изучение Bootstrap (верстка сайта) ',
            link: ' /bo19 ',
            image: bo19
        }, 
        {
            title: ' Unity 3D ',
            description: ' 3D шутер с мультиплеером в Unity ',
            link: ' /un20 ',
            image: un20
        }, 
        {
            title: ' Unity C#  ',
            description: ' Изучение Unity C# для начинающих ',
            link: ' /un21 ',
            image: un21
        },
        {
            title: ' Android Unity ',
            description: ' Android игра на Unity ',
            link: ' /un22 ',
            image: un22
        },


        {
            title: ' C++ ',
            description: ' Создание игры на C++ ',
            link: ' /cpp23 ',
            image: cpp23
        }, 
        {
            title: ' Unreal Engine 5 ',
            description: ' Unreal Engine 5 с нуля (Разработка игр) ',
            link: ' /un24 ',
            image: un24
        }, 
        {
            title: ' Blender ',
            description: ' 25. Blender для нач 3D моделирование ',
            link: ' /bl25 ',
            image: bl25
        },
        {
            title: ' Vuforia AR и Unity ',
            description: ' игра дополненная реальность (Vuforia AR и Unity) ',
            link: ' /va26 ',
            image: va26
        },


        {
            title: ' Игра на Python! ',
            description: ' Разработка игр на Python с нуля / Уроки Pygame ',
            link: ' /py27 ',
            image: py27
        }, 
        {
            title: ' Java профи ',
            description: ' Уроки Java для профессионалов ',
            link: ' /Ja28 ',
            image: Ja28
        }, 
        {
            title: ' C++ ',
            description: ' Уроки Qt Creator | Графический интерфейс на С++ ',
            link: ' /C29 ',
            image: C29
        },
        {
            title: ' Node JS ',
            description: ' Уроки Node JS для начинающих ',
            link: ' /Js30 ',
            image: Js30
        },


        {
            title: ' Сайт на Django  ',
            description: ' Уроки Python Django / Создание сайта ',
            link: ' /dj31 ',
            image: dj31
        }, 
        {
            title: ' Создание RPG игры ',
            description: ' Создание RPG игры в GameMaker Studio ',
            link: ' /st32 ',
            image: st32
        }, 
        {
            title: ' Vue.js ',
            description: ' Уроки Vue.js для начинающих ',
            link: ' /vu33 ',
            image: vu33
        },
        {
            title: ' Java Андроид ',
            description: ' Уроки Java Андроид программирования ',
            link: ' /Ja34 ',
            image: Ja34
        },


        {
            title: ' Ruby On Rails ',
            description: ' Создание блога на Ruby On Rails ',
            link: ' /ru36 ',
            image: ru36
        }, 
        {
            title: ' PHP, MySQL ',
            description: ' Видеокурс по PHP, MySQL / Создание динамического сайта ',
            link: ' /PHP37 ',
            image: PHP37
        }, 
        {
            title: ' Ruby ',
            description: ' Изучение языка Ruby для начинающих ',
            link: ' /ru38 ',
            image: ru38
        },
        {
            title: ' JavaScript ',
            description: ' Изучение JavaScript: от нуля и до создания сайта ',
            link: ' /js39 ',
            image: js39
        },


        {
            title: ' PhotoShop ',
            description: ' Уроки PhotoShop для начинающих ',
            link: ' /ph40 ',
            image: ph40
        }, 
        {
            title: ' Corona SDK ',
            description: ' Мобильное приложение на Corona SDK ',
            link: ' /co41 ',
            image: co41
        }, 
        {
            title: ' Swift ',
            description: ' Уроки Swift для начинающих ',
            link: '/Sw42',
            image: Sw42
        },
        {
            title: ' CMS WordPress ',
            description: ' Создание сайта с нуля на CMS WordPress ',
            link: '/CM43',
            image: CM43
        },


        {
            title: ' Unreal Engine 4 ',
            description: ' Создание игры на Unreal Engine 4 / FPS шутер ',
            link: '/un44',
            image: un44
        }, 
        {
            title: ' C# Windows ',
            description: ' Изучение C# и создание Windows программ ',
            link: '/csh45',
            image: csh45
        }, 
        {
            title: ' C++ ',
            description: ' Полное изучение C++ / Курс в одном видео для начинающих с нуля ',
            link: '/cpp46',
            image: cpp46
        },
        {
            title: ' Mongo DB ',
            description: ' Изучение MongoDB / Работа с базой данных ',
            link: '/mo47',
            image: mo47
        },


        {
            title: ' Java ',
            description: ' Java для с нуля: основы,  Android ',
            link: '/ja48',
            image: ja48
        }, 
        {
            title: ' Python ',
            description: ' Изучение Python до профи / Основы, Django, TKinter ',
            link: '/Pd49',
            image: Pd49
        }, 
        {
            title: ' вёрстка ',
            description: ' Современная вёрстка адаптивного веб-сайта ',
            link: '/vw50',
            image: vw50
        },
        {
            title: ' React JS ',
            description: ' Создание приложения на React JS / Использование API ',
            link: '/js51',
            image: js51
        },


        {
            title: ' Angular ',
            description: ' Изучение Angular для начинающих ',
            link: ' /an52 ',
            image: an52
        }, 
        {
            title: ' Bootstrap 4  ',
            description: ' Верстка сайта на Bootstrap 4 ',
            link: ' /Bu53 ',
            image: Bu53
        }, 
        {
            title: ' Android ',
            description: ' Разработка Android программы. Создание чата ',
            link: ' an54 ',
            image: an54
        },
        {
            title: ' Git GitHab ',
            description: ' Изучение Git GitHab ',
            link: ' Git55 ',
            image: Git55
        },


        {
            title: ' C# ',
            description: ' Программа на C# .Net Windows Forms ',
            link: ' Csh56 ',
            image: Csh56
        }, 
        {
            title: ' Андроид ',
            description: ' Разработка Андроид программы с базой данных ',
            link: ' an57 ',
            image: an57
        }, 
        {
            title: ' Unity ',
            description: ' Дополненная реальность / Создание игры на Unity ',
            link: ' un58 ',
            image: un58
        },
        {
            title: ' C# ',
            description: ' Изучение ASP .NET Core MVC Создание сайтов на C# ',
            link: ' asp59 ',
            image: asp59
        },


        {
            title: ' SQL ',
            description: ' Основы языка SQL ',
            link: ' sql60 ',
            image: sql60
        }, 
        {
            title: ' Gulp 4 ',
            description: ' Изучение Gulp 4 ',
            link: ' gu61 ',
            image: gu61
        }, 
        {
            title: ' SASS / SCSS ',
            description: ' Изучение пропроцессора SASS / SCSS ',
            link: ' sa62 ',
            image: sa62
        },
        {
            title: ' Golang ',
            description: ' Изучения языка Golang / Создание веб сайта на Go ',
            link: ' go63 ',
            image: go63
        },


        {
            title: ' С# ',
            description: ' Изучение С# WPF на практике Создание программ на C# ',
            link: ' csh64 ',
            image: csh64
        }, 
        {
            title: ' Unity 5 ',
            description: ' Разработка игр на Unity 5  Gamedev ',
            link: ' un65 ',
            image: un65
        }, 
        {
            title: ' Flask ',
            description: ' Изучение Flask Создание сайта на Python ',
            link: ' fl66 ',
            image: fl66
        },
        {
            title: ' С ',
            description: ' зучение языка Си для начинующих ',
            link: ' c67 ',
            image: c67
        },


        {
            title: ' Java ',
            description: ' Разработка сайта на Java Spring Boot ',
            link: ' ja68 ',
            image: ja68
        }, 
        {
            title: ' Laravel ',
            description: ' Фреймворк Laravel Создание веб-сайта ',
            link: ' la69 ',
            image: la69
        }, 
        {
            title: ' MEAN ',
            description: ' Изучение стека MEAN: MongoDB, Express, Angular и Node JS ',
            link: ' me70 ',
            image: me70
        },
        {
            title: ' Kotlin ',
            description: ' Изучение языка Kotlin для начинающих ',
            link: ' me71 ',
            image: me71
        },


        {
            title: ' Docker ',
            description: ' Изучение Docker с нуля / Уроки Докер для начинающих ',
            link: ' do72 ',
            image: do72
        }, 
        {
            title: ' Figma ',
            description: ' Figma с нуля Создание дизайна  ',
            link: ' fy73 ',
            image: fy73
        }, 
        {
            title: ' Linux ',
            description: ' Linux для начинающих уроки Ubuntu и Bash Shel ',
            link: ' li74 ',
            image: li74
        },
        {
            title: ' OpenCV ',
            description: ' нейронные сети Изучение Python OpenCV ',
            link: ' py75 ',
            image: py75
        },


        {
            title: ' Android Studio ',
            description: ' Разработка на Android Studio Приложение E-Commerce  ',
            link: ' an76 ',
            image: an76
        }, 
        {
            title: ' Futter и Dart ',
            description: ' Изучение Futter и Dart для начинающих ',
            link: ' fl77 ',
            image: fl77
        }, 
        {
            title: ' React Native ',
            description: ' Уроки React Native для начинающих Разработка приложения с нуля ',
            link: ' re78 ',
            image: re78
        },
        {
            title: ' Godot ',
            description: ' Уроки Godot Engine / Разработка игр на Годот ',
            link: ' go79 ',
            image: go79
        },


        {
            title: ' PyQt5 ',
            description: ' Изучение PyQt5 / Графический интерфейс на Python  ',
            link: ' py80 ',
            image: py80
        }, 
        {
            title: ' Kotlin Android Studio ',
            description: ' Kotlin Android Studio / Разработка Андроид программ  ',
            link: ' ko81 ',
            image: ko81
        }, 
        {
            title: ' C# 2D игра ',
            description: ' Разработка 2D игры на C# WinForms ',
            link: ' csh82 ',
            image: csh82
        },
        {
            title: ' Ecommerce ',
            description: ' Интернет магазин WordPress / Создание Ecommerce ',
            link: ' wo83 ',
            image: wo83
        },


        {
            title: ' Telegram Бот ',
            description: ' Разработка Telegram Ботов на Python ',
            link: ' te84 ',
            image: te84
        }, 
        {
            title: ' C# ',
            description: ' Xamarin Forms / Мобильные приложения на C# ',
            link: '  csh85',
            image: csh85
        }, 
        {
            title: ' C++ ',
            description: ' Уроки C++ WinForms / Создание программ на Windows ',
            link: ' cpp86 ',
            image: cpp86
        },
        {
            title: ' Основы прог ',
            description: ' Основы программирования ',
            link: ' os87 ',
            image: os87
        },


        {
            title: ' Unity ',
            description: ' Создание 3D игры на Создание 3D игры на Unity / Разработка стратегии / Разработка стратегии ',
            link: ' un88 ',
            image: un88
        }, 
        {
            title: ' React JS ',
            description: ' Практика React JS / Разработка магазина (eCommerce) ',
            link: ' re89 ',
            image: re89
        }, 
        {
            title: ' Solidity ',
            description: ' Крипто разработка на Solidity / Создание монеты ',
            link: '  so90',
            image: so90
        },
        {
            title: ' Java ',
            description: ' Java 3D Game / Разработка игры Minecraft ',
            link: ' ja91 ',
            image: ja91
        },


        {
            title: ' C++ ',
            description: ' Игра с дизайном на C++ / Создание C++ WinForms игры ',
            link: ' cpp92 ',
            image: cpp92
        }, 
        {
            title: ' C#  ',
            description: ' Создание C# WPF игры / Разработка игры с дизайном ',
            link: ' csh93 ',
            image: csh93
        }, 
        {
            title: ' Unity ',
            description: ' Разработка мобильной игры на Unity ',
            link: ' un94 ',
            image: un94
        },
        {
            title: ' Python ',
            description: ' Изучение Python UI (GUI Apps) / Программы на Питон ',
            link: ' py95 ',
            image: py95
        },


        {
            title: ' Next JS ',
            description: ' Фреймворк Next JS / Изучение NextJS для начинающих ',
            link: ' js96 ',
            image: js96
        }, 
        {
            title: ' Java ',
            description: ' Разработка игр на Java для начинающих ',
            link: ' ja97 ',
            image: ja97
        }, 
        {
            title: ' Python ',
            description: ' Уроки ChatGPT API / Разработка программ на Python и ChatGPT ',
            link: ' py98 ',
            image: py98
        },
        {
            title: ' Redis ',
            description: ' Изучение Redis с нуля ',
            link: '  re99',
            image: re99
        },


        {
            title: '  C# ',
            description: ' C# MAUI – Разработка приложений с нуля ',
            link: ' csh100 ',
            image: csh100
        }, 
        {
            title: ' Rust ',
            description: ' Изучение языка Rust для начинающих ',
            link: ' ru101 ',
            image: ru101
        }, 
        {
            title: ' Python ',
            description: ' Python Data Science / Обработка данных (Scikit-learn, TensorFlow) ',
            link: ' da102 ',
            image:  da102
        },
        {
            title: ' Nuxt JS  ',
            description: ' Курс Nuxt JS / Изучение Nuxt.js фреймворка ',
            link: 'js103  ',
            image: js103
        },


        {
            title: ' QA ',
            description: ' QA тестировщик с нуля / Тестирование для начинающих ',
            link: ' qa104 ',
            image: qa104
        }, 
        {
            title: ' Three.js ',
            description: ' Three.js с нуля: Разработка сайта с 3Д Графикой ',
            link: 'js105  ',
            image: js105
        }, 
        {
            title: ' Python ',
            description: ' Python Data Analytics / Аналитика данных (NumPy, Pandas, Matplotlib) ',
            link: ' da106 ',
            image: da106
        },
        {
            title: ' Python ',
            description: ' Python FastAPI / Изучение библиотеки с нуля ',
            link: ' py107 ',
            image: py107
        },
    ];

    return (
        <div className="courses-container">
            {courses.map((course, index) => (
                <a href={course.link} className='course-link'>
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <h1 className="course-title">{course.title}</h1>
                        <p className="course-description">{course.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default VideoCourses;