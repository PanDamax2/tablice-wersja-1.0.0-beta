# Opis
Projekt składa się z:
- panelu - zarządza bazą danych
- tablicy - wyświetla dane
- back-end - server express
- dashboard.sql - baza danych mysql

# Instalacja
## 1. Pobieramy

-node (wersje LTS): https://nodejs.org/en/download
-XAMPP:  https://www.apachefriends.org/pl/download.html
-tablice-wersja-1.0.0-beta

## 2. Odpalamy bazy danych

 - odpalamy XAMPP
 - importujemy bazę danych dashboard.qsl
 - tworzymy użytkownika w zakładce SQL, kod:

    CREATE USER 'admin'@'localhost' IDENTIFIED BY 'HaGV;F[A&QNX}B8)4lmYxIET';
    
    GRANT SELECT,INSERT,UPDATE,DELETE ON dashboard.* TO 'admin'@'localhost';

## 3. Odpalamy instalator