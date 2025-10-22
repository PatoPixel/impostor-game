# 🚀 Guía de Despliegue - Impostor Game

## 📱 Despliegue en GitHub Pages

### 1. Preparar el repositorio

1. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/impostor-game.git
   git push -u origin main
   ```

2. **Actualizar la URL en package.json:**
   - Cambia `"homepage": "https://tu-usuario.github.io/impostor-game"` por tu usuario real

### 2. Configurar GitHub Pages

1. **Ve a Settings del repositorio**
2. **Scroll hasta "Pages"**
3. **En "Source" selecciona "GitHub Actions"**
4. **El despliegue se hará automáticamente**

### 3. Despliegue manual (alternativo)

```bash
# Instalar dependencias
npm install

# Construir la aplicación
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

## 🔗 Acceso desde móvil

Una vez desplegado, la aplicación estará disponible en:
**https://TU-USUARIO.github.io/impostor-game**

### Características móviles:

- ✅ **PWA (Progressive Web App)** - Se puede instalar como app
- ✅ **Responsive design** - Optimizado para móviles
- ✅ **Touch-friendly** - Botones grandes y fáciles de tocar
- ✅ **Sin zoom** - Interfaz adaptada a pantallas pequeñas
- ✅ **Modo QR** - Perfecto para grupos grandes

## 📱 Instalación como App

Los usuarios pueden:
1. **Abrir el enlace en el navegador móvil**
2. **Tocar "Añadir a pantalla de inicio"** (Android) o "Compartir > Añadir a pantalla de inicio" (iOS)
3. **¡Listo!** La app aparecerá como una aplicación nativa

## 🎯 Uso recomendado

### Para grupos pequeños (3-5 personas):
- Usar **modo normal** - todos ven la misma pantalla
- Pasar el teléfono entre jugadores

### Para grupos grandes (6-10 personas):
- Usar **modo QR individual**
- Cada jugador escanea su QR único
- Mayor privacidad y organización

## 🔧 Personalización

### Cambiar colores:
Edita `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#3b82f6', // Cambia este color
  }
}
```

### Añadir palabras:
Edita `GameConfigScreen.js`:
```javascript
const predefinedWords = [
  'Café', 'Pizza', 'Gato', // Añade tus palabras aquí
];
```

## 🐛 Solución de problemas

### El despliegue no funciona:
1. Verifica que el repositorio sea público
2. Revisa que GitHub Actions esté habilitado
3. Comprueba que la URL en package.json sea correcta

### La app no se carga en móvil:
1. Verifica que el enlace sea correcto
2. Prueba en modo incógnito
3. Limpia la caché del navegador

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de GitHub Actions
2. Verifica la consola del navegador
3. Comprueba que todas las dependencias estén instaladas

---

¡Disfruta jugando! 🎉
