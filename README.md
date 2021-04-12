
<div align="center"><img src="assets/logo.png"/></div>

---

###### Cilj ovog projetka je bio da se upoznam sa **React Native**-om.
---

## Potrebni programi:
*   [Android Studio](https://developer.android.com/studio)
*   [Node](https://nodejs.org/en/)
*   [Expo-cli](https://docs.expo.io/get-started/installation/)
*   [json-server](https://github.com/typicode/json-server)
*   [local-tunnel](https://github.com/localtunnel/localtunnel)


## :memo: Instalacija:
###### Instalacija potrebnih programa za pokretanje servera.
```bash
    $ npm install -g json-server 
    $ npm install -g localtunnel 
```

###### Nakon instalacije servera, potrebno je pokrenuti sledeće komande kako bi naš server bio upotrebljiv.
```bash
    $ json-server --watch --port 8000 data/db.json 
    $ lt --port 8000 --subdomain food-app-data
```
###### Pošto smo uspešno uspeli da pokrenemo naš lokalni server, prelazimo na preuzimanje aplikacije i podešavanje iste.
```bash
    $ git clone https://github.com/Jezda1337/foodApp && cd foodApp
    $ npm install #install dependencies from package.json 
```


## :rocket: Pokretanje same aplikacije:
1.  Potrebno je pokrenuti android emulator pomocu **Android Studia** 
    :arrow_down::arrow_down::arrow_down:
    ![how to :D](assets/tuts/clip-one.gif)

2.  Nakon završetka prvog koraka, potrebno je pokrenuti sledećy komandu:
    ***Jako je važno da vam emulator bude pokrenut pre sledeće komande***
```bash
     $ expo start --localhost --android #command for start application in android emulator
```
---
---