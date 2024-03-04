@echo off

REM Komunikat o rozpoczeciu
echo ====================================
echo Rozpoczynanie instalacji...
echo ====================================

REM Przejdź do folderu tablica
cd "tablica"

REM Właczenie back-endu
start /b node server.js

REM Otworz przegladarke
start http://localhost:4444

REM Komunikat o zakonczeniu
echo ====================================
echo Tablica uruchomiony w tle!
echo ====================================
