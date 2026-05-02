# Ejercicio B — Distancia Bogotá → Medellín con Ley de Haversine

## Coordenadas

| Ciudad | Latitud (φ) | Longitud (λ) |
|--------|:-----------:|:------------:|
| **Bogotá** (origen) | 4.7110° N | 74.0721° W |
| **Medellín** (destino) | 6.2442° N | 75.5812° W |

---

## Paso 1 — Conversión a radianes

$$\varphi_1 = 4.7110° \cdot \frac{\pi}{180} = 0.082222 \text{ rad}$$
$$\varphi_2 = 6.2442° \cdot \frac{\pi}{180} = 0.108984 \text{ rad}$$
$$\lambda_1 = -74.0721° \cdot \frac{\pi}{180} = -1.292463 \text{ rad}$$
$$\lambda_2 = -75.5812° \cdot \frac{\pi}{180} = -1.318797 \text{ rad}$$

## Paso 2 — Diferencias

$$\Delta\varphi = 0.108984 - 0.082222 = 0.026762 \text{ rad}$$
$$\Delta\lambda = -1.318797 - (-1.292463) = -0.026334 \text{ rad}$$

## Paso 3 — Calcular $a$

$$a = \operatorname{sen}^{2}\!\left(\frac{\Delta\varphi}{2}\right) + \cos(\varphi_1)\cos(\varphi_2)\operatorname{sen}^{2}\!\left(\frac{\Delta\lambda}{2}\right)$$

$$\operatorname{sen}^{2}(0.013381) = 1.790 \times 10^{-4}$$

$$\cos(0.082222)\cos(0.108984) = 0.996621 \cdot 0.994067 = 0.990694$$

$$\operatorname{sen}^{2}(-0.013167) = 1.734 \times 10^{-4}$$

$$a = 1.790\times10^{-4} + 0.990694 \cdot 1.734\times10^{-4} = 3.508\times10^{-4}$$

## Paso 4 — Calcular $c$

$$c = 2\cdot\operatorname{atan2}\!\left(\sqrt{3.508\times10^{-4}},\;\sqrt{1 - 3.508\times10^{-4}}\right) = 0.037454 \text{ rad}$$

## Paso 5 — Distancia final

$$d = R \cdot c = 6371 \text{ km} \cdot 0.037454 \approx \boxed{238.6 \text{ km}}$$

Este resultado tiene un error de apenas **0.58 %** frente a los 240 km que reporta Google Maps (línea recta), lo que valida la fórmula de Haversine como herramienta confiable para estimar distancias aéreas.
