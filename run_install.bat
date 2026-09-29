@echo off
cd /d C:\ml2
echo Starting npm install...
"C:\ml2\node-bin\node-v20.18.0-win-x64\npm.cmd" install > C:\ml2\install-log.txt 2>&1
echo Done. Exit code: %errorlevel%
