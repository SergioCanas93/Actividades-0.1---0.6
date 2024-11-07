# Actividad 0.5 Diagrama de Secuencia SPA
____
```mermaid
sequenceDiagram
    Actor U as User
    participant B as Buscador
    participant S as Servidor

    U ->> B: 
    Note right of U: El usuario inicia el evento digitando una nueva nota
    Activate U

    B ->> S: POST HTTP https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note Right of B: Se ejecuta el codigo JavaScript y envia la nota con content-type JSON
    Activate S
    S -->> B: HTTP 201 created
    Note Right of S: No se carga nuevamente la pagina, permanece la misma pagina
    Deactivate S

    B -->> U: Visualización de la lista con la nueva nota en la pagina
    Deactivate U
