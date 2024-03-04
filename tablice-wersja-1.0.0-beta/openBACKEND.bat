@echo off

REM Komunikat o rozpoczeciu
echo ====================================
echo Rozpoczynanie instalacji...
echo ====================================

REM Przejdź do folderu back-endu
cd "back-end"

REM Właczenie back-endu
start /b node app.js


REM Komunikat o zakonczeniu
echo ====================================
echo Serwer uruchomiony w tle!
echo ====================================
