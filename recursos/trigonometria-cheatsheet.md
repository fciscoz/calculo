# Cheatsheet — Trigonometría para El Transporte Aéreo

## Leyes fundamentales

### Ley del Seno
```
a / sen(A) = b / sen(B) = c / sen(C)
```
- **Casos:** ALA (dos ángulos + lado entre ellos) | AAL (dos ángulos + lado no comprendido)
- **Unidades:** lados en km / m / mn — ángulos en ° o rad

### Ley del Coseno
```
c² = a² + b² − 2ab · cos(C)
```
- **Casos:** LLL (tres lados → hallar ángulos) | LAL (dos lados + ángulo → hallar lado)
- **Caso especial:** C = 90° → se reduce al Teorema de Pitágoras

### Ley de Haversine
```
a = 2R · arcsen( √[ sen²(Δlat/2) + cos(lat1)·cos(lat2)·sen²(Δlon/2) ] )
```
- **R** = 6 371 km (radio medio de la Tierra)
- **Uso:** distancia de gran círculo entre dos puntos por latitud/longitud
- **Unidades:** latitud y longitud en radianes

## Conversiones rápidas

| De | A | Fórmula |
|----|---|---------|
| Grados (°) | Radianes (rad) | rad = ° × π/180 |
| Radianes (rad) | Grados (°) | ° = rad × 180/π |
| GMS → Decimal | ° | D + M/60 + S/3600 |

## Ciudades colombianas — datos clave (Foro 1)

| Ruta | Distancia (km) | Fuente |
|------|---------------|--------|
| Cúcuta → Bogotá | 370,23 | Enunciado Ejercicio E |
| Cúcuta → Medellín | 180,00 | Enunciado Ejercicio E |
| Medellín → Bogotá | 230,45 | Enunciado Ejercicio E |
| Tunja → Medellín | 350,00 | Enunciado Ejercicio C |
| Tunja → Mitú | 640,00 | Enunciado Ejercicio C |

## Resultados calculados (Semanas 3–4)

| Ejercicio | Resultado | Ley usada |
|-----------|-----------|-----------|
| Turista O→A=230, O→B=110, ∠=65° | AB ≈ 208,8 km | Coseno (LAL) |
| Triángulo Bog–Med–Buc: A=55°, B=80°, c=230 km | a≈266 km, b≈320 km | Seno (ALA) |
