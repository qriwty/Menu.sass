# Menu.sass
### | Menu |
**Using before global container with content of website**
## Exemple HTML
```
<body>
    <div class="menu">
        <div class="menu__bar">
          {{ Menu content }}
        </div>
    </div>
    <div class="global">
        {{ Site content }}
    </div>
</body>
```
## Exemple Pug
```
div.menu
  div.menu__bar
    {{ Menu content }}
div.global
  {{ Site content }}
```
