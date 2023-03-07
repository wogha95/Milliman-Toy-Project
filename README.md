# Miliman-Toy-Project

- 과제 기간 : 23.03.02 ~ 23.03.09
- 제출자 : 김재호

<br />

## 실행 방법

```
npm install
npm run compile-main
npm run dev
```

<br />

## 요구 사항

- [x] 프로그램 초기 화면 크기 (960 X 630)
- [x] 모든 글씨체 inter
- [x] Font size 10으로 고정
- [x] TitleBar 컴포넌트
  - [x] Title bar 크기 (960 X 30)
  - [x] 가운데 Title 위치
  - [x] Electron에서 제공하는 기본 titlebar는 hidden하기
- [x] SideBar 컴포넌트
  - [x] antd의 collapse 컴포넌트 이용한 2개의 category로 구성
  - [x] category의 크기 (230 X 23)
  - [x] Tree View
    - [x] material ui의 TreeView 컴포넌트를 이용
    - [x] Folder 1, Folder 2 로 구성
    - [x] Folder 2 는 File 1 ~ File 10 의 children을 가짐
    - [x] Tree View의 크기 (230 X 277)
  - [x] Resize
    - [x] re-resizable 패키지의 resizable 컴포넌트를 이용
    - [x] 마우스 Drag and Drop으로 원하는 만큼 조절 가능
    - [x] 작아진 Tree View에 스크롤바가 생성되어 밑의 내용을 사용자가 확인 가능
- [x] Main 컴포넌트

<br />

## 데모 영상

https://user-images.githubusercontent.com/75886763/223480305-fa72f3f2-2569-4857-a6d8-9e58155e5052.mov

<br />

## 폴더 구조

```
📦Milliman-Toy-Project
 ┣ 📂public
 ┃ ┣ 📜electron.ts # electron을 제어할 파일
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂Components  # App.tsx에 들어갈 컴포넌트를 모아둔 폴더
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂SideBar
 ┃ ┃ ┃ ┣ 📜Category.css
 ┃ ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂TitleBar
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂assets  # 정적 자원을 모아둔 폴더 (현재 font파일 저장)
 ┃ ┃ ┗ 📂fonts
 ┃ ┃ ┃ ┗ 📜Inter-Regular.ttf
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.tsx
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

<br />

## Commit Convention

- **feat** : 기능 추가, 삭제, 변경 _- 코드 수정 발생 시_
- **design** : CSS등 사용자 UI 디자인 변경 _- 코드 수정 발생 시_
- **fix** : 버그 수정 _- 코드 수정 발생 시_
- **docs** : 문서 추가, 삭제, 변경 _- 코드 수정 없음_
- **refactor** : 코드 리팩토링 _- 코드 수정 발생 시_
- **chore** : 패키지 매니저 설정, yarn 모듈 설치 등 _- 코드 수정 없음_
