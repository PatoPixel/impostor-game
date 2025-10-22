# 🎭 Impostor Game

Una aplicación web del juego viral de TikTok "Quién es el impostor" desarrollada en React.

## 🎯 Descripción

Los jugadores son un grupo de amigos (3 a 10 personas). Todos reciben la misma palabra, excepto uno que será el impostor y no la verá o verá una palabra diferente. Luego, los jugadores deben describir sin decir la palabra directamente, intentando descubrir quién es el impostor.

## ✨ Funcionalidades

- **Pantalla de inicio** con instrucciones del juego
- **Configuración personalizable**:
  - Número de jugadores (3-10)
  - Modo impostor (sin palabra / palabra diferente)
  - Palabra personalizada o aleatoria
- **Modo QR individual** para cada jugador
- **Diseño responsive** optimizado para móvil y PC
- **Interfaz minimalista** con transiciones suaves

## 🚀 Instalación y Despliegue

### 📱 Para usar desde móvil (Recomendado)

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/impostor-game.git
   git push -u origin main
   ```

2. **Configura GitHub Pages:**
   - Ve a Settings > Pages
   - Selecciona "GitHub Actions" como fuente
   - El despliegue será automático

3. **¡Listo!** Tu app estará en: `https://TU-USUARIO.github.io/impostor-game`

### 💻 Para desarrollo local

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd impostor-game
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎮 Cómo jugar

1. **Configura la partida**: Selecciona el número de jugadores, modo impostor y palabra
2. **Reparto de palabras**: Cada jugador ve su palabra (o rol de impostor)
3. **¡A jugar!**: Los jugadores describen su palabra sin decirla directamente
4. **Votación**: Al final, voten quién creen que es el impostor

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **QRCode.js** - Generación de códigos QR
- **CSS Animations** - Transiciones suaves

## 📱 Características del diseño

- **Fondo oscuro** con gradientes
- **Animaciones suaves** entre pantallas
- **Botones interactivos** con efectos hover
- **Diseño responsive** para todos los dispositivos
- **Tipografía clara** y legible

## 🎯 Modos de juego

### Modo Normal
- Todos los jugadores ven sus palabras en la misma pantalla
- Ideal para grupos pequeños (3-5 personas)
- Pasar el teléfono entre jugadores

### Modo QR Individual
- Cada jugador escanea su QR único
- Perfecto para grupos grandes (6-10 personas)
- Mayor privacidad y organización
- Se puede instalar como app en el móvil

## 🔧 Configuración avanzada

Puedes personalizar:
- **Palabras predefinidas** en `GameConfigScreen.js`
- **Colores del tema** en `tailwind.config.js`
- **Animaciones** en `src/index.css`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

¡Diviértete jugando! 🎉
