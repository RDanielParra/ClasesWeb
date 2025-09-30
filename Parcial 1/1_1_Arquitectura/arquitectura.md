# Arquitectura de una aplicacion web   

---

## Por como se comunican sus partes   

- **Cliente-Servidor**  
Este es el modelo más tradicional y común. En esta arquitectura, una parte de la aplicación, el cliente, solicita servicios o recursos a otra parte, el servidor. El cliente puede ser un navegador web, una aplicación de escritorio o un dispositivo móvil, mientras que el servidor es el que procesa la solicitud, accede a la base de datos si es necesario y devuelve una respuesta. Un ejemplo clásico es una página web donde el navegador (cliente) solicita la información al servidor que aloja el sitio.

  ![imagen cliente-servidor](https://imgs.search.brave.com/MOBo4_ZdFwy5Fw0McmkMfsY4bliuL6Qzvl_S1U_huec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29uc3VsdG9yaW8t/dmlydHVhbC5jb20v/bWFudWFsLWRlLXVz/dWFyaW8vbGliL21v/ZGVsby1jbGllbnRl/LXNlcnZpZG9yLnBu/Zw)

- **Punto a Punto (P2P)**   
A diferencia de la arquitectura cliente-servidor, en una red P2P, cada nodo o participante tiene las mismas responsabilidades. No existe un servidor central. En este modelo, los dispositivos se comunican directamente entre sí para compartir recursos y datos. Ejemplos de esta arquitectura incluyen aplicaciones de intercambio de archivos (torrents) o algunas criptomonedas como Bitcoin.

  ![imagen p2p](https://imgs.search.brave.com/npYF8LO_TPKLyvV6DkNBtLlnWH-4FAjA-qPas9rmKOQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E4L1JlZF9wdW50/b19hX3B1bnRvLnBu/Zw)
---

## Por como se organiza el codigo  

- **Monolito**   
La arquitectura ***monolítica*** es aquella en la que todos los componentes de la aplicación se agrupan en un solo bloque o unidad. El código para la interfaz de usuario, la lógica de negocio y la capa de acceso a datos se encuentran en un mismo repositorio y se despliegan juntos. Es un modelo sencillo de desarrollar y desplegar al inicio, pero puede volverse difícil de manejar y escalar a medida que la aplicación crece.

  ![imagen monolito](https://imgs.search.brave.com/oJs7vkYQI3-rrnTLZS7Xhj2MtQQ5nmGD-dVTdUSdWKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Rl/YW5kb3NpbXBsZS5j/b20vYXNzZXRzL2lt/Zy9pbWFnZXMvYXJx/dWl0ZWN0dXJhLWRl/LXNvZnR3YXJlL21v/ZGVsby1tb25vbGl0/aWNvLnBuZw)

- **Capas**   
También conocida como arquitectura en ***n-capas***, esta estructura organiza el código en diferentes niveles lógicos o capas. Cada capa tiene una responsabilidad específica y solo se comunica con las capas adyacentes. Las capas más comunes son la de presentación (interfaz de usuario), la de lógica de negocio y la de datos. Esto facilita la separación de responsabilidades y mejora la mantenibilidad del código.

  ![imagen capas](https://imgs.search.brave.com/fvZfKlUDRVyWWR8LVuhY8Hy3aSmKHKXn1ah1TX3GuA0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb2Rl/YW5kb3NpbXBsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvVW50aXRs/ZWQtNzEtZTE3MDUx/OTgyOTUyMjkucG5n)

- **Microservicios**   
En esta arquitectura, la aplicación se divide en un conjunto de servicios pequeños e independientes que se comunican entre sí. Cada microservicio se enfoca en una funcionalidad específica (por ejemplo, gestión de usuarios, procesamiento de pagos) y se desarrolla y despliega de manera independiente. Esto ofrece mayor flexibilidad, escalabilidad y resiliencia, ya que un fallo en un servicio no necesariamente afecta a toda la aplicación.

  ![imagen microservicios](https://imgs.search.brave.com/jw12Go_hyPN65PaE8uTJ7OHUR7l7w1dJicv-6Y_gDUY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGl0/ZXN0YWNrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9taWNybzMud2Vi/cA)

- **Serverless**   
La arquitectura ***Serverless*** (sin servidor) permite a los desarrolladores construir y ejecutar aplicaciones sin tener que gestionar la infraestructura subyacente del servidor. La responsabilidad de aprovisionar y escalar los servidores es transferida al proveedor de servicios en la nube (como AWS Lambda o Google Cloud Functions). El desarrollador solo se preocupa por el código de las funciones que se ejecutan en respuesta a un evento. Es ideal para aplicaciones con cargas de trabajo intermitentes o impredecibles.

  ![imagen serverless](https://imgs.search.brave.com/MFGTYDkWejqNukNpWYMz63gcADWhvz2q0HwzpHFI9S8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kYzcy/MmpybHAyenU4LmNs/b3VkZnJvbnQubmV0/L21lZGlhL3VwbG9h/ZHMvMjAyMS8wOS8x/Ny8xLmpwZw)