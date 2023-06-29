document.addEventListener('DOMContentLoaded', function() {
    var notification = document.createElement('div');
    notification.setAttribute('id', 'notification');
    notification.innerHTML = 'Hola! ¡Bienvenida a Caffeine & Co.! Conéctate a nuestro chat en vivo. ¡Opina sobre cada café ☕!';
  
    // Estilos para el mensaje estético
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '20px';
    notification.style.backgroundColor = '#ffcc00';
    notification.style.color = '#fff';
    notification.style.borderRadius = '5px';
    notification.style.width = '250px';
    notification.style.textAlign = 'center';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease-in-out';
  
    document.body.appendChild(notification);
  
    // Mostrar la notificación con una animación
    setTimeout(function() {
      notification.style.opacity = '1';
    }, 500);
  
    // Ocultar la notificación después de 30 segundos
    setTimeout(function() {
      notification.style.opacity = '0';
      setTimeout(function() {
        document.body.removeChild(notification);
      }, 500);
    }, 30000);
  });
  