# proyectoPatrones

## **📌 Funcionamiento del Proyecto**
El proyecto es un **sistema web distribuido** para la gestión de inventarios y soporte técnico en una institución educativa. Se compone de:

- Un **frontend en Angular**, donde los usuarios interactúan con el sistema.  
- Un **Broker en Node.js con Express**, que actúa como intermediario entre el frontend y los distintos backends.  
- Dos **backends independientes**:
  - **Backend de Mesa de Ayuda**: Gestiona solicitudes de soporte técnico.  
  - **Backend de Inventario**: Administra el inventario de equipos.  

📌 **¿Cómo funciona?**  
1. **El usuario accede al sistema** desde el frontend (Angular).  
2. **El Broker recibe la solicitud** y determina a qué backend enviarla.  
3. Si la solicitud está relacionada con **soporte técnico**, la envía al **backend de mesa de ayuda**.  
4. Si la solicitud es sobre **inventario**, la redirige al **backend de inventario**.  
5. **El backend responde**, enviando los datos de vuelta al Broker, que los devuelve al frontend.  

Este diseño permite **modularidad, escalabilidad y separación de responsabilidades**.

---

## **📌 Requerimientos Funcionales**
1. ✅ **Gestión de inventarios**: Permitir el registro, consulta, actualización y eliminación de equipos en el sistema.  
2. ✅ **Gestión de solicitudes de soporte**: Permitir a los usuarios crear, consultar y actualizar casos de soporte técnico.  
3. ✅ **Autenticación y roles de usuario**: Implementar un sistema de login con diferentes niveles de acceso (usuario, administrador).  
4. ✅ **Historial de cambios en equipos**: Registrar automáticamente las modificaciones realizadas en el inventario.  
5. ✅ **Notificaciones de cambios de estado**: Enviar alertas cuando un caso de soporte cambia de estado.  
6. ✅ **Filtrado de solicitudes de soporte**: Permitir búsqueda y filtrado de casos por estado (Abierto, En Curso, Cerrado).  
7. ✅ **Reportes y estadísticas**: Generar informes sobre equipos disponibles y rendimiento del soporte técnico.  
8. ✅ **Acceso multiusuario**: Permitir que varios usuarios trabajen simultáneamente sin afectar el rendimiento.

---

## **📌 Requerimientos No Funcionales**
1. ⚙️ **Escalabilidad**: La arquitectura distribuida debe permitir agregar más módulos sin afectar el rendimiento.  
2. ⚙️ **Seguridad**: Implementar autenticación con JWT para proteger los endpoints.  
3. ⚙️ **Disponibilidad**: Garantizar un tiempo de actividad superior al 99% con balanceo de carga si es necesario.  
4. ⚙️ **Modularidad**: Separar el frontend, el Broker y los backends para facilitar el mantenimiento.  
5. ⚙️ **Tiempo de respuesta óptimo**: Las peticiones deben responder en menos de 500ms en condiciones normales.  
6. ⚙️ **Compatibilidad**: Funcionar correctamente en navegadores modernos como Chrome, Firefox y Edge.  
7. ⚙️ **Registro de logs**: Implementar un sistema de monitoreo y registro de errores en los servidores.  
8. ⚙️ **Uso eficiente de la base de datos**: Optimizar consultas para evitar sobrecarga en MongoDB.

---

## **📌 ¿Por qué es un modelo MVW?**
Este proyecto sigue el modelo **MVW (Model-View-Whatever)** debido a la presencia de un **Broker** como intermediario.  

### **1️⃣ Componentes del Modelo MVW en el Proyecto**
- **Modelo (Model)**: Se encarga de gestionar los datos y operaciones en MongoDB, con Mongoose en los backends.  
- **Vista (View)**: Es el frontend en Angular, donde los usuarios interactúan con la aplicación.  
- **Whatever (Broker)**: Es la capa intermedia que decide a qué backend enviar las solicitudes, haciendo que la vista no se comunique directamente con los modelos.

### **2️⃣ ¿Por qué el Broker hace que sea MVW?**
- **Separa la lógica de negocio**: La vista no necesita saber qué backend manejará la solicitud, solo se comunica con el Broker.  
- **Permite múltiples backends**: No hay un único punto de procesamiento, sino que cada backend maneja su módulo (soporte o inventario).  
- **Hace que el sistema sea flexible y escalable**: Se pueden agregar más servicios en el futuro sin modificar el frontend.  

📌 **Conclusión**:  
Gracias a la implementación del **Broker**, el sistema se ajusta al modelo **MVW**, donde la capa intermedia gestiona la lógica de redirección y distribución de cargas. Esto optimiza el rendimiento y facilita la escalabilidad del sistema. 🚀  

