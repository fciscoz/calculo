# Foro 1 — Semana 4 · Ejercicio B
**Cálculo de distancia entre ciudades mediante la Ley de Haversine**

> *Cálculo I — Politécnico Grancolombiano*
> *Tutora: Andrea Abaunza Galvis*

---

## 1. Introducción

El transporte aéreo en Colombia ha sido determinante para integrar territorios separados por la cordillera de los Andes, donde la distancia geodésica resulta más relevante que la rutera para planear vuelos comerciales. Calcular esa distancia con precisión exige reconocer que la Tierra no es plana: dos puntos sobre su superficie están unidos por un arco de círculo máximo, no por una recta. Para cuantificar ese arco la trigonometría esférica ofrece la **fórmula de Haversine**, derivada de la identidad del semiverseno y empleada históricamente en navegación marítima y astronomía (Sinnott, 1984).

En el presente ejercicio se selecciona el triángulo **Bogotá – Cali – Medellín**, eje que articula el corredor económico central del país, y se calcula con Haversine la distancia entre la ciudad de **origen Bogotá** y la **ciudad destino Medellín**, contrastando el resultado con el reportado por Google Maps.

---

## 2. Selección del triángulo y coordenadas

| Vértice | Ciudad | Latitud (φ) | Longitud (λ) |
|--------:|--------|:-----------:|:------------:|
| A | **Bogotá** (origen) | 4.7110° N | 74.0721° W |
| B | **Medellín** (destino) | 6.2442° N | 75.5812° W |
| C | Cali | 3.4516° N | 76.5320° W |

*Coordenadas tomadas de Google Maps para los centros urbanos de cada capital.*

Los tres vértices conforman un triángulo no rectángulo cuyos lados representan las rutas aéreas más transitadas del país. Bogotá actúa como origen por ser sede del aeropuerto El Dorado, principal hub aéreo de Colombia (Aerocivil, 2023).

---

## 3. Marco teórico: Ley de Haversine

Sean dos puntos sobre una esfera de radio $R$ con coordenadas geográficas $(\varphi_1,\lambda_1)$ y $(\varphi_2,\lambda_2)$, donde $\varphi$ representa la latitud y $\lambda$ la longitud, ambas en radianes. La distancia $d$ medida sobre el círculo máximo que los une se obtiene mediante:

$$
a \;=\; \operatorname{sen}^{2}\!\left(\frac{\Delta\varphi}{2}\right) + \cos(\varphi_1)\,\cos(\varphi_2)\,\operatorname{sen}^{2}\!\left(\frac{\Delta\lambda}{2}\right)
$$

$$
c \;=\; 2\cdot\operatorname{atan2}\!\left(\sqrt{a},\;\sqrt{1-a}\right)
$$

$$
d \;=\; R \cdot c
$$

donde $\Delta\varphi=\varphi_2-\varphi_1$, $\Delta\lambda=\lambda_2-\lambda_1$ y se toma $R=6371\text{ km}$ como radio medio terrestre (Veness, 2024).

A diferencia de la distancia euclidiana plana — que ignora la curvatura — Haversine asume una Tierra esférica y entrega el arco real recorrido al volar entre las dos ciudades, supuesto suficiente para distancias menores a 1000 km con un error inferior al 0.5 % frente al modelo elipsoidal WGS-84 (Sinnott, 1984).

---

## 4. Cálculo paso a paso: Bogotá → Medellín

### 4.1 Conversión a radianes

$$\varphi_1 = 4.7110^{\circ} \cdot \frac{\pi}{180} = 0.082222 \text{ rad}$$
$$\varphi_2 = 6.2442^{\circ} \cdot \frac{\pi}{180} = 0.108984 \text{ rad}$$
$$\lambda_1 = -74.0721^{\circ} \cdot \frac{\pi}{180} = -1.292463 \text{ rad}$$
$$\lambda_2 = -75.5812^{\circ} \cdot \frac{\pi}{180} = -1.318797 \text{ rad}$$

### 4.2 Diferencias

$$\Delta\varphi = \varphi_2 - \varphi_1 = 0.026762 \text{ rad}$$
$$\Delta\lambda = \lambda_2 - \lambda_1 = -0.026334 \text{ rad}$$

### 4.3 Cálculo de $a$

$$\operatorname{sen}^{2}\!\left(\tfrac{\Delta\varphi}{2}\right) = \operatorname{sen}^{2}(0.013381) = 1.790 \times 10^{-4}$$

$$\cos(\varphi_1)\cos(\varphi_2) = (0.996621)(0.994067) = 0.990694$$

$$\operatorname{sen}^{2}\!\left(\tfrac{\Delta\lambda}{2}\right) = \operatorname{sen}^{2}(-0.013167) = 1.734 \times 10^{-4}$$

$$a = 1.790\times 10^{-4} + 0.990694 \cdot 1.734\times 10^{-4} = 3.508\times 10^{-4}$$

### 4.4 Cálculo de $c$ y de la distancia

$$c = 2\cdot\operatorname{atan2}\!\left(\sqrt{3.508\times 10^{-4}},\; \sqrt{1 - 3.508\times 10^{-4}}\right) = 0.037454 \text{ rad}$$

$$\boxed{\,d_{\text{Bog}\to\text{Med}} = 6371 \text{ km} \cdot 0.037454 \approx 238.6 \text{ km}\,}$$

---

## 5. Comparación con Google Maps

| Ruta | Haversine (calculada) | Google Maps (línea recta) | Diferencia | Error % |
|------|:-:|:-:|:-:|:-:|
| Bogotá → Medellín | **238.6 km** | 240 km | 1.4 km | 0.58 % |
| Bogotá ↔ Cali | 306.6 km | 305 km | 1.6 km | 0.52 % |
| Medellín ↔ Cali | 328.0 km | 330 km | 2.0 km | 0.61 % |

> Las distancias de Google Maps fueron obtenidas con la herramienta *Medir distancia* sobre los centros urbanos.

---

## 6. Análisis del error

La diferencia inferior al 1 % se explica por dos factores principales:

1. **Modelo geométrico:** Haversine modela la Tierra como una esfera perfecta con $R=6371$ km, mientras que Google Maps utiliza el elipsoide WGS-84 (achatamiento ≈ 1/298.257). En latitudes ecuatoriales como las colombianas el achatamiento introduce una corrección de centenares de metros sobre rutas de pocos cientos de kilómetros.
2. **Precisión de coordenadas:** los valores tomados corresponden al centro urbano nominal y no al baricentro geográfico de cada ciudad; una diferencia de 0.001° en latitud representa ≈ 111 m sobre el terreno.

Aun así, Haversine resulta lo suficientemente preciso para planeación de vuelos cortos y demuestra cómo la trigonometría se traduce en una herramienta operativa de la aviación colombiana (Stewart, 2008).

---

## 7. Conclusiones

1. La Ley de Haversine permitió calcular la distancia geodésica Bogotá → Medellín en **238.6 km**, con un error de apenas **0.58 %** frente a Google Maps, validando la fórmula como instrumento confiable para estimar distancias aéreas.
2. El procedimiento traduce una situación real — un viaje en avión — al lenguaje matemático mediante coordenadas, conversión a radianes y aplicación de la función $\operatorname{atan2}$, articulando los objetivos planteados por Thomas y Weir (2006) sobre el uso de procesos algebraicos en problemas reales.
3. Los pequeños errores observados motivan un siguiente paso: en la Semana 5 se podrá comparar este modelo esférico con el elipsoidal y programar la fórmula en R para automatizar el cálculo sobre todo el corredor aéreo colombiano.

---

## Referencias

Aeronáutica Civil de Colombia. (2023). *Boletín estadístico operacional 2022*. Aerocivil. https://www.aerocivil.gov.co

Sinnott, R. W. (1984). Virtues of the Haversine. *Sky and Telescope, 68*(2), 159.

Stewart, J. (2008). *Cálculo de una variable: trascendentes tempranas* (6.ª ed.). International Thomson Editores.

Thomas, G. B., & Weir, M. D. (2006). *Cálculo: una variable* (11.ª ed.). Pearson Educación. https://www-ebooks7-24-com.loginbiblio.poligran.edu.co/?il=3421

Veness, C. (2024). *Calculate distance, bearing and more between Latitude/Longitude points*. Movable Type Scripts. https://www.movable-type.co.uk/scripts/latlong.html
