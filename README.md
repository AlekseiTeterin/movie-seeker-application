![Иллюстрация к проекту](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/images/imageForProject.jpg)
# Movie-seeker

Учебный проект

## В проекте реализованы следующие требования к функциональности:

###  - Функциональные компоненты c хуками использовались в приоритете над классовыми. Классовый только [ErrorBoundary](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/ErrorBoundary/ErrorBoundary.jsx)

### - Есть разделение на [умные](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/pages/HistoryPage/HistoryPage.jsx) и [глупые](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/pages/LoginPage/LoginPage.jsx) компоненты

### - Есть рендеринг списков [HomePage](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/pages/HomePage/HomePage.jsx),  [Search](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Search/Search.jsx), [History](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/pages/HistoryPage/HistoryPage.jsx)...

### - Реализованы формы регистрации [RegisterForm](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Forms/RegisterForm.jsx) и авторизации [SignInForm](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Forms/SignInForm.jsx)

### - Есть применение Контекст API [IsAuthContext](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/store/IsAuthContext.js). В контексте хранится значение состояния авторизации пользователя и функция для изменения её состояния.

### - Есть применение предохранителя [ErrorBoundary](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/ErrorBoundary/ErrorBoundary.jsx) для отлавливания ошибок в данных, необходимых для компонента [MoviePage](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/pages/MoviePage/MoviePage.jsx) 

### - Есть хотя бы один кастомный [хук](https://github.com/AlekseiTeterin/movie-seeker-app/tree/master/src/hooks)

### - Хотя бы несколько компонентов используют PropTypes [PasswordField](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Forms/FormsComponents/PasswordField.jsx), [ConfirmPasswordField](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Forms/FormsComponents/ConfirmPasswordField.jsx), [RegisterForm](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/components/Forms/RegisterForm.jsx)

### - Поиск не должен триггерить много запросов к серверу. Применение кастомного хука [useDebounce](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/hooks/useDebounce.js) позволяет отправлять запросы на сервер только после отсутствия ввода текста в поле поиска в течении 0,5 с.

### - Есть применение [lazy + Suspense](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/App.js). Применено раделение на основании маршрутов. Информация подгружается при переходе по соответствующему пути. 

### - В проекте используется Modern Redux with Redux Toolkit [store](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/store/index.js)

### - Используются [слайсы](https://github.com/AlekseiTeterin/movie-seeker-app/tree/master/src/store/slices)

### - Есть хотя бы одна кастомная мидлвара [localStorageMiddleware](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/store/localStorageMiddleware.js). Для изменения данных в local storage избранного и истории при добавлении или удалении. 

### - Используется RTK Query [movieApi](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/store/api/movieApi.js)

### - Используется [Transforming Responses](https://github.com/AlekseiTeterin/movie-seeker-app/blob/master/src/store/api/movieApi.js)
