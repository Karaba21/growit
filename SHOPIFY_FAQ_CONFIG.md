# Configuración de Metacampos en Shopify

Para que las preguntas frecuentes aparezcan en tus productos, necesitas configurar los siguientes elementos en el admin de Shopify:

## 1. Crear Metaobjeto "FAQ"

1. Ve a **Configuración** → **Metaobjetos**
2. Haz clic en **Agregar definición**
3. Configura:
   - **Nombre**: `faq`
   - **Tipo**: `faq`

4. Agrega los siguientes campos:

### Campo 1: Pregunta
- **Nombre**: `Pregunta`
- **Clave**: `pregunta`
- **Tipo**: Texto de una sola línea
- **Validación**: Requerido ✓

### Campo 2: Respuesta
- **Nombre**: `Respuesta`
- **Clave**: `respuesta`
- **Tipo**: Texto de varias líneas
- **Validación**: Requerido ✓

5. Guarda la definición

## 2. Crear Metacampo de Producto

1. Ve a **Configuración** → **Metacampos** → **Productos**
2. Haz clic en **Agregar definición**
3. Configura:
   - **Nombre**: `Preguntas frecuentes`
   - **Namespace y clave**: `custom.preguntas_frecuentes`
   - **Tipo**: Lista de metaobjetos
   - **Metaobjeto**: Selecciona `faq` (el que creaste en el paso 1)
   - **Validación**: Opcional (puedes hacerlo requerido si quieres)

4. Guarda la definición

## 3. Agregar FAQs a un Producto

1. Ve a **Productos** y selecciona un producto
2. Desplázate hasta la sección de **Metacampos**
3. Busca el campo **Preguntas frecuentes**
4. Haz clic en **Agregar campo**
5. Para cada pregunta:
   - Haz clic en **Seleccionar categorías** (o el botón similar)
   - Crea un nuevo metaobjeto FAQ o selecciona uno existente
   - Completa los campos:
     - **Pregunta**: La pregunta que verán los clientes
     - **Respuesta**: La respuesta detallada
6. Guarda el producto

## Ejemplo de FAQs

Aquí hay algunos ejemplos basados en tu imagen:

### FAQ 1
- **Pregunta**: `¿Por qué necesitas un Essence Bag?`
- **Respuesta**: 
```
El Essence Bag está pensado para tu Multi Styler Aruneo® 7 en 1, es ese detalle que transforma tu rutina en un ritual más ordenado. No se trata solo de guardarlo, se trata de cuidar tus herramientas de belleza como se merecen.
```

### FAQ 2
- **Pregunta**: `¿Tiene espacio para todos los cabezales?`
- **Respuesta**: `[Tu respuesta aquí]`

### FAQ 3
- **Pregunta**: `¿Los materiales protegen mi Multi Styler?`
- **Respuesta**: `[Tu respuesta aquí]`

## Notas Importantes

- El namespace **debe ser** `custom` y la clave **debe ser** `preguntas_frecuentes` para que funcione con el código
- Los campos del metaobjeto deben usar las claves `pregunta` y `respuesta` exactamente como se muestra
- Puedes agregar hasta 10 FAQs por producto (configurable en el código)
- Los badges de "1 AÑO DE GARANTÍA" y "COMPRA PROTEGIDA" se muestran automáticamente cuando hay FAQs

## Verificación

Para verificar que todo funciona:

1. Agrega al menos una FAQ a un producto
2. Ve a la página del producto en tu tienda
3. Desplázate debajo del botón "Comprar"
4. Deberías ver:
   - Los badges de garantía y compra protegida
   - El acordeón de preguntas frecuentes
   - Al hacer clic en una pregunta, se expande para mostrar la respuesta
