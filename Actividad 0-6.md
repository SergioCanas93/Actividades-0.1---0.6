# Actividad 0.6 Diagrama de Secuencia Nueva nota en SPA
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
    Note Right of B: Contine la nota como datos JSON
    Activate B
    B -> B: document.getElementById('notes_form')
    Note Right of B: Obtiene el elemento form y registra un event handler}
    B -> B: e.preventDefault()
    Note Right of B: Evita el envio por defecto del formulario
    B -> B: notes.push(note)
    Note Right of B: crea la nueva nota
    B -> B:  redrawNotes()
    Note Right of B: Vuelve a renderizar la lista de notas en la página
    B ->> S: sendToServer(note)
    Note Right of B: Envía la nueva nota al servidor.
    Deactivate B
    S -->> B: HTTP 201 created

    B -->> U: Visualización de la lista con la nueva nota en la pagina
    Deactivate U
