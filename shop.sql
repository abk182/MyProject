-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 24 2017 г., 09:27
-- Версия сервера: 10.2.7-MariaDB
-- Версия PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `carts`
--

CREATE TABLE `carts` (
  `cartID` varchar(30) CHARACTER SET utf8 COLLATE utf8_german2_ci NOT NULL,
  `items` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `carts`
--

INSERT INTO `carts` (`cartID`, `items`) VALUES
('1503382123848', ''),
('1503387913182', '9,1,'),
('1503505753760', '1,1,1,1,1,'),
('1503505778664', '1,1,1,'),
('1503505833114', ''),
('1503554337500', ''),
('1503556269213', ''),
('1503557868264', ''),
('1503558158453', ''),
('1503559711972', '');

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` int(10) NOT NULL,
  `img` text NOT NULL,
  `description` text NOT NULL,
  `count` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `img`, `description`, `count`) VALUES
(1, 'BSD ALVX 20.6', 22900, 'bsdalvx.jpg', 'Материал: Хромомолибден / 100% 4130 CrMo.\r\nНаклон рулевой трубы: 75.5°.\r\nНаклон подседельной трубы: 71°.\r\nВысота стендовера: 8.7\".\r\nВысота каретки: 11.7\".\r\nЗадний треугольник: 12.5\"-13\".\r\nРазмеры: 20.3\" / 20,6\" / 20.8\" и 21\".\r\nБрейкмаунты: Полностью отсутствуют крепления для тормоза.\r\nРулевая: Интегрированная.\r\nКаретка: MiD.\r\nВес: 2,267 кг.', 6),
(4, 'Total Hangover', 6900, 'total-hangover-fork.jpg', 'Материал Хромомолибден / Full 4130 CrMo\r\nДлина штока 170 мм. \r\nДиаметр оси 10 мм.\r\nВыбег 28 мм.\r\nТолщина дропаутов	5 мм.\r\nБрейкмаунты	Отсутсвуют.\r\nСтяжной болт	Резьба М25 / 6061 алюминий.\r\nВес	966 гр.', 5),
(6, 'BMX втулка передняя TotalBMX Tech 2', 4990, 'black-tech2normal.jpg', 'Стандарт крепления	Болты 10мм под 17мм ключ.\r\nДиаметр оси	17 мм.\r\nМатериал оси	Хромомолибден / 4130 CrMo.\r\nМатериал корпуса	Алюминий / 6061AL.\r\nКоличество спиц	36.\r\nВес	250 гр.', 14),
(8, 'Каретка Subrosa Bitchin MiD', 1790, 'subrosa-bitchin-mid.jpg', 'Комплектация:	Подшипники / Центральный спейсер / Конусы / Набор проставок.\r\nСтандарт	MiD.\r\nДиаметр под ось	19 мм или 22 мм зависит от модификации.\r\nШирина спейсера	48 мм.\r\nМатериал конуса	Алюминий.\r\nВес	160 гр.', 0),
(9, 'вынос Odyssey Raft Top Load', 4690, 'odyssey-raft-stem-front-3.jpg', 'Тип выноса	Top Load.\r\nДлина	50 мм.\r\nСтандарт крепления руля	22.2 мм.\r\nМатериал	6061-T6 Алюминий.\r\nПодъем	32 мм.\r\nВес	326 гр.', 2),
(10, 'Грипсы Fiend Team Flangeless', 490, 'fiend-team-flangeless.png', 'Материал	Кратон.\r\nДлина	150 мм.\r\nТолщина	6 мм.', 12),
(11, 'Звезда United Supreme SCD', 1790, 'United Supreme SCD.jpg', 'Материал	7075-T6 Алюминий.\r\nТолщина	4 мм.\r\nОсь	24 мм.\r\nВес	25T - 69 гр / 28T - 85 гр.\r\nСтандарт крепления	Болтовое.\r\nКоличество зубов	25T, 28T.', 0),
(12, 'покрышка Maxxis Torch / Кевлар', 1490, 'Maxxis Torch.jpg', 'Диаметр	20\".\r\nБортировочный трос	Кевлар.\r\nШирина	1.95.\r\nМаксимальное давление	110 psi.\r\nВес	370 гр.', 100);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `carts`
--
ALTER TABLE `carts`
  ADD UNIQUE KEY `cartID` (`cartID`) USING BTREE;

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
