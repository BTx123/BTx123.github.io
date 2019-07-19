@echo off

set message="Updates"

IF NOT %1 == "" (
  set message=%1
)

npm run deploy -- -m %message%
