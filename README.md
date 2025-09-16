# Women Tarot API 🎴✨

Una aplicación web que muestra cartas del tarot junto con su correspondencia con diosas mitológicas, creando una experiencia única que combina el misticismo del tarot con la sabiduría ancestral femenina.

## 🌟 Características

- Visualización de cartas del tarot con sus descripciones
- Correspondencias con diosas mitológicas
- Diseño responsivo
- Interfaz intuitiva y elegante
- Integración con API externa
- Estilo visual personalizado

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.3
- API REST (MockAPI)

## 📋 Prerrequisitos

Para ejecutar este proyecto localmente, necesitarás:

- Un servidor web local (como XAMPP, WAMP, o Live Server)
- Un navegador web moderno
- Conexión a internet (para cargar Bootstrap y los datos de la API)

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone [URL del repositorio]
```

2. Coloca los archivos en tu servidor web local

3. Accede al proyecto a través de tu navegador:
```
http://localhost/WomenTarot
```

## 📁 Estructura del Proyecto

```
WomenTarot/
│
├── css/
│   └── index.css          # Estilos personalizados
│
├── js/
│   └── index.js           # Lógica principal de la aplicación
│
├── index.html             # Página principal
├── README.md             # Documentación
└── LICENSE               # Licencia del proyecto
```

## 🔄 Flujo de Datos

1. La aplicación realiza una petición a la API de Tarot
2. Los datos se procesan y se crean tarjetas para cada arcano
3. Se muestran las cartas con sus correspondientes diosas
4. Cada carta incluye:
   - Imagen del arcano
   - Nombre del arcano
   - Descripción del arcano
   - Imagen de la diosa correspondiente
   - Nombre de la diosa
   - Descripción de la diosa

## 🎨 Personalización

Puedes modificar los estilos en `css/index.css` para adaptar la apariencia a tus necesidades. Los principales elementos que puedes personalizar son:

- `.cardsHouse`: Layout de las cartas
- `#cardHouse`: Estilo individual de cada carta
- Colores y tipografías generales

## 👩‍💻 API

La aplicación consume datos de:
```
https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## ✒️ Autor

- **JM** - *Desarrollo Completo*

---
⌨️ con ❤️ por JM

