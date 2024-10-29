# Actividad 0.4 Diagrama de Secuencia
____
```mermaid
sequenceDiagram
    Actor U as User
    participant B as Buscador
    participant S as Servidor

    U ->> B: 
    Note right of U: El usuario inicia el evento digitando una
    Note right of U: nota en el formulario y dando clic en "save"
    Activate U

    B ->> S: POST HTTP https://studies.cs.helsinki.fi/exampleapp/new_note
    Activate S
    Note Right of S: El servidor ejecuta el codigo, y envia los datos de la solicitud POST
    S -->> B: HTTP 302, el servidor solicita al navegador HTTP GET a la dirección notes.
    Deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Activate S
    S -->> B: main.css
    Deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Activate S
    S -->> B: main.js
    Deactivate S

    B ->> S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Activate S
    S -->> B: data.jason
    Deactivate S

    B -->> U: Visualización de la lista con la nueva nota en la pagina
    Deactivate U

    
  
