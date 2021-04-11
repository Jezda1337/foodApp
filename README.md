<div align="center"><img src="assets/logo.png"/></div>

---

####Циљ овог пројетка је био да се упознам са **React Native**-ом.
####Поента ове апликације је, да студенти могу да провере шта ће током једног дана у мензи да буде сервирано од оброка за тај дан.
---

##Потребни програми:
*   [Android Studio](https://developer.android.com/studio)
*   [Node](https://nodejs.org/en/)
*   [Expo-cli](https://docs.expo.io/get-started/installation/)
*   [json-server](https://github.com/typicode/json-server)
*   [local-tunnel](https://github.com/localtunnel/localtunnel)

##:memo: Инсталација:

###### Инсталација потребних програма за покретање локалног сервера.

```bash
    $ npm -i -g json-server #local serve for fetch json data
    $ npm -i -g localtunnel #local tunnel for out app
```

###### Након инсталације сервера, потребно је покренути следеће команде како би наш сервер био употребљив.
```bash
    $ json-server --watch --port 8000 data/db.json 
    $ lt --port 8000 --subdomain food-app-data
```
###### Пошто смо успешно успели да покренемо наш локални сервер, прелазимо на преузимање апликације и подешавање исте.
```bash
    $ git clone https://github.com/Jezda1337/foodApp && cd foodApp
    $ npm -i #install dependencies from package.json 
```


##:rocket: Покретање саме апликације:
1.  Потребно је покренути пројекат помоћу **Android Studia** затим унутар програма покренути андроид емулатор. :arrow_down::arrow_down::arrow_down:
    ![how to :D](assets/tuts/clip-one.gif)

2.  Након завршетка првог корака, потребно је покренути следећу команду: 
*Јако је важно да вам емулатор буде покренут пре наредне команде*
```bash
     $ expo start --localhost --android #command for start application in android emulator
```
---


