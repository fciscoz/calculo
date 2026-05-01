# Anexo técnico — Cálculos detallados con Haversine

Documento de respaldo del `foro-post.md`. Contiene el desarrollo numérico completo de las tres aristas del triángulo Bogotá – Cali – Medellín.

## Constantes

- Radio terrestre medio: $R = 6371$ km
- Conversión: $\theta_{\text{rad}} = \theta_{\text{grados}} \cdot \pi/180$

## Coordenadas (en radianes)

| Ciudad | φ (rad) | λ (rad) |
|--------|---------|---------|
| Bogotá | 0.082222 | −1.292463 |
| Medellín | 0.108984 | −1.318797 |
| Cali | 0.060242 | −1.335389 |

---

## Arista 1 — Bogotá ↔ Medellín

| Paso | Valor |
|------|-------|
| Δφ | 0.026762 rad |
| Δλ | −0.026334 rad |
| sin²(Δφ/2) | 1.790 × 10⁻⁴ |
| cos(φ₁)·cos(φ₂) | 0.990694 |
| sin²(Δλ/2) | 1.734 × 10⁻⁴ |
| a | 3.508 × 10⁻⁴ |
| c | 0.037454 rad |
| **d** | **238.6 km** |

## Arista 2 — Bogotá ↔ Cali

| Paso | Valor |
|------|-------|
| Δφ | −0.021980 rad |
| Δλ | −0.042927 rad |
| sin²(Δφ/2) | 1.208 × 10⁻⁴ |
| cos(φ₁)·cos(φ₂) | 0.994815 |
| sin²(Δλ/2) | 4.606 × 10⁻⁴ |
| a | 5.790 × 10⁻⁴ |
| c | 0.048132 rad |
| **d** | **306.6 km** |

## Arista 3 — Medellín ↔ Cali

| Paso | Valor |
|------|-------|
| Δφ | −0.048742 rad |
| Δλ | −0.016592 rad |
| sin²(Δφ/2) | 5.939 × 10⁻⁴ |
| cos(φ₁)·cos(φ₂) | 0.992264 |
| sin²(Δλ/2) | 6.883 × 10⁻⁵ |
| a | 6.622 × 10⁻⁴ |
| c | 0.051482 rad |
| **d** | **328.0 km** |

---

## Verificación cruzada (Google Maps, herramienta *Medir distancia*)

| Ruta | Haversine | Google Maps | Δ (km) | Error % |
|------|-----------|-------------|--------|---------|
| Bog ↔ Med | 238.6 | 240.0 | 1.4 | 0.58 |
| Bog ↔ Cal | 306.6 | 305.0 | 1.6 | 0.52 |
| Med ↔ Cal | 328.0 | 330.0 | 2.0 | 0.61 |

**Promedio del error:** 0.57 % — coherente con la diferencia entre el modelo esférico (Haversine) y el elipsoidal (WGS-84) usado por Google.

---

## Notación lista para WIRIS

```
a = sin((phi2 - phi1)/2)^2 + cos(phi1)*cos(phi2)*sin((lambda2 - lambda1)/2)^2
c = 2*atan2(sqrt(a), sqrt(1-a))
d = 6371 * c
```
