-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Lut 2024, 21:28
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `dashboard`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `access_token`
--

CREATE TABLE `access_token` (
  `id_token` int(11) NOT NULL,
  `access_token` varchar(100) DEFAULT NULL,
  `refresh_token` varchar(150) DEFAULT NULL,
  `expirens_time` int(10) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `classrooms`
--

CREATE TABLE `classrooms` (
  `classroom_id` int(11) NOT NULL,
  `html` text DEFAULT NULL,
  `manual_plan` text DEFAULT NULL,
  `showManual` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `classrooms`
--

INSERT INTO `classrooms` (`classroom_id`, `html`, `manual_plan`, `showManual`) VALUES
(1, '<!-- saved from url=(0040)https://plan.zsz.bobowa.pl/plany/o1.html -->\n<html data-lt-installed=\"true\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\n<meta http-equiv=\"Content-Language\" content=\"pl\">\n<meta name=\"description\" content=\"Plan lekcji. /nPlan lekcji oddziału 5bT 5bT5/n utworzony za pomocą programu Plan lekcji Optivum firmy VULCAN\">\n<title>Plan lekcji oddziału - 5bT 5bT5</title>\n<link rel=\"stylesheet\" href=\"./Plan lekcji oddziału - 5bT 5bT5_files/plan.css\" type=\"text/css\">\n<script language=\"JavaScript1.2\" type=\"text/javascript\" src=\"./Plan lekcji oddziału - 5bT 5bT5_files/plan.js.pobrane\"></script></head><body><p align=\"left\"><a href=\"https://plan.zsz.bobowa.pl/index.html\">Plan lekcji</a></p>\n\n\n\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"tabtytul\">\n<tbody><tr>\n<td class=\"tytul\">\n<img src=\"./Plan lekcji oddziału - 5bT 5bT5_files/pusty.gif\" height=\"80\" width=\"1\">\n<span class=\"tytulnapis\">5bT 5bT5</span><p style=\"background-color: green;\">Brak aktualnie lekcji</p></td></tr></tbody></table>\n<div align=\"center\">\n<table border=\"0\" cellpadding=\"10\" cellspacing=\"0\">\n<tbody><tr><td colspan=\"2\">\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"4\" class=\"tabela\">\n<tbody><tr>\n<th>Nr</th>\n<th>Godz</th>\n<th>Poniedziałek</th>\n<th>Wtorek</th>\n<th>Środa</th>\n<th>Czwartek</th>\n<th>Piątek</th>\n</tr>\n<tr>\n<td class=\"nr\">0</td>\n<td class=\"g\"> 0:00- 0:00</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">17</a></td>\n</tr>\n<tr>\n<td class=\"nr\">1</td>\n<td class=\"g\"> 8:00- 8:45</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">11</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">28</a></td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">27</a></span></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">17</a></td>\n</tr>\n<tr>\n<td class=\"nr\">2</td>\n<td class=\"g\"> 8:50- 9:35</td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">11</a></span></td>\n<td class=\"l\"><span class=\"p\">WOS</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n15.html\" class=\"n\">JI</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s8.html\" class=\"s\">26</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">27</a></span></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">17</a></td>\n</tr>\n<tr>\n<td class=\"nr\">3</td>\n<td class=\"g\"> 9:40-10:25</td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">11</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n</tr>\n<tr>\n<td class=\"nr\">4</td>\n<td class=\"g\">10:40-11:25</td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">17</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.niemiecki-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n23.html\" class=\"n\">KP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n38.html\" class=\"n\">JZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">25</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">28</a></td>\n</tr>\n<tr>\n<td class=\"nr\">5</td>\n<td class=\"g\">11:30-12:15</td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">17</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span class=\"p\">religia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n21.html\" class=\"n\">PŁ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">20</a></td>\n<td class=\"l\"><span class=\"p\">wf</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s13.html\" class=\"s\">gim2</a></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">28</a></td>\n</tr>\n<tr>\n<td class=\"nr\">6</td>\n<td class=\"g\">12:20-13:05</td>\n<td class=\"l\"><span class=\"p\">historia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n10.html\" class=\"n\">BF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">27</a></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">religia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n21.html\" class=\"n\">PŁ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">20</a></td>\n<td class=\"l\"><span class=\"p\">wf</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s13.html\" class=\"s\">gim2</a></td>\n<td class=\"l\"><span class=\"p\">religia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n21.html\" class=\"n\">PŁ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">20</a></td>\n</tr>\n<tr>\n<td class=\"nr\">7</td>\n<td class=\"g\">13:10-13:55</td>\n<td class=\"l\"><span class=\"p\">historia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n10.html\" class=\"n\">BF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">27</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n29.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span class=\"p\">wf</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s13.html\" class=\"s\">gim2</a></td>\n<td class=\"l\"><span class=\"p\">historia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n10.html\" class=\"n\">BF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">27</a></td>\n</tr>\n</tbody></table>\n</td></tr>\n</tbody></table>\n</div>\n\n\n\n</body></html>', '', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `header`
--

CREATE TABLE `header` (
  `header_id` int(11) NOT NULL,
  `bell` varchar(255) DEFAULT NULL,
  `imgSchoolLogo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `header`
--

INSERT INTO `header` (`header_id`, `bell`, `imgSchoolLogo`) VALUES
(1, 'godzina', 'https://i.ibb.co/KhjpyJq/logo.webp');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `hidden_sections`
--

CREATE TABLE `hidden_sections` (
  `hidden_sections_id` int(11) NOT NULL,
  `classrooms` tinyint(1) DEFAULT NULL,
  `information` tinyint(1) DEFAULT NULL,
  `replacements` tinyint(1) DEFAULT NULL,
  `slider` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `hidden_sections`
--

INSERT INTO `hidden_sections` (`hidden_sections_id`, `classrooms`, `information`, `replacements`, `slider`) VALUES
(1, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `information`
--

CREATE TABLE `information` (
  `information_id` int(11) NOT NULL,
  `text` text DEFAULT NULL,
  `imgInformation` varchar(255) DEFAULT NULL,
  `showImg` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `information`
--

INSERT INTO `information` (`information_id`, `text`, `imgInformation`, `showImg`) VALUES
(1, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius at accusantium provident culpa, aliquid asperiores tenetur deleniti, pariatur aspernatur vitae eligendi odio veritatis impedit maiores minus commodi adipisci architecto, necessitatibus minima sapiente eos voluptatum porro facere. Aperiam, iusto iure.', 'https://i.ibb.co/KhjpyJq/logo.webp', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `replacements`
--

CREATE TABLE `replacements` (
  `replacements_id` int(11) NOT NULL,
  `lesson` varchar(255) DEFAULT NULL,
  `teacher` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `deputy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `replacements`
--

INSERT INTO `replacements` (`replacements_id`, `lesson`, `teacher`, `branch`, `subject`, `room`, `date`, `deputy`) VALUES
(1, '1', 'Mario Goolo', '4c', 'lekcja zredukowana', '21', '23-03-2024', 'Piotr Paweł'),
(2, '-', '-', '-', '-', '-', '-', '-');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `slider`
--

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `imgSlider` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `slider`
--

INSERT INTO `slider` (`slider_id`, `imgSlider`) VALUES
(1, 'https://edunews.pl/images/obrazki/klasa21.jpg'),
(2, 'https://edunews.pl/images/obrazki/klasa21.jpg'),
(3, 'https://edunews.pl/images/obrazki/klasa21.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `user_name` text DEFAULT NULL,
  `user_lastname` text DEFAULT NULL,
  `login` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`user_id`, `admin`, `user_name`, `user_lastname`, `login`, `email`, `password`) VALUES
(1, 1, 'karol', 'Nowak', 'karol', 'karol@email.com', '123456'),
(2, 1, 'Jan', 'Nowak', 'jan', 'karol@email.com', '123456');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `access_token`
--
ALTER TABLE `access_token`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`classroom_id`);

--
-- Indeksy dla tabeli `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`header_id`);

--
-- Indeksy dla tabeli `hidden_sections`
--
ALTER TABLE `hidden_sections`
  ADD PRIMARY KEY (`hidden_sections_id`);

--
-- Indeksy dla tabeli `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`information_id`);

--
-- Indeksy dla tabeli `replacements`
--
ALTER TABLE `replacements`
  ADD PRIMARY KEY (`replacements_id`);

--
-- Indeksy dla tabeli `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `access_token`
--
ALTER TABLE `access_token`
  MODIFY `id_token` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `classroom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `header`
--
ALTER TABLE `header`
  MODIFY `header_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `hidden_sections`
--
ALTER TABLE `hidden_sections`
  MODIFY `hidden_sections_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `information`
--
ALTER TABLE `information`
  MODIFY `information_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `replacements`
--
ALTER TABLE `replacements`
  MODIFY `replacements_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `slider`
--
ALTER TABLE `slider`
  MODIFY `slider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `access_token`
--
ALTER TABLE `access_token`
  ADD CONSTRAINT `access_token_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
