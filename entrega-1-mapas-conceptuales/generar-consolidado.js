// Generador del Consolidado Grupal - Semana 3
// Foro 1: El Transporte Aéreo - Cálculo I
// Ejecutar: node generar-consolidado.js

const pptxgen = require("C:/Users/srfra/AppData/Roaming/npm/node_modules/pptxgenjs");
const path = require("path");

const IMG_DIR = "C:/Users/srfra/OneDrive/Documentos/GitHub/calculo/imagenes";
const OUT = "C:/Users/srfra/OneDrive/Documentos/GitHub/calculo/foros/foro1-transporte-aereo/semana-03-conceptos/consolidado-grupal.pptx";

// Paleta
const NAVY = "1E3A5F";
const GOLD = "C9A227";
const LIGHT = "F4F6FA";
const WHITE = "FFFFFF";
const GRAY = "6B7C93";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in
pres.title = "Consolidado Grupal Semana 3 - Foro Transporte Aereo";
pres.author = "Grupo A02 - Calculo I";

// =====================================================
// SLIDE 1: PORTADA
// =====================================================
const s1 = pres.addSlide();
s1.background = { color: NAVY };

// Banda lateral dorada
s1.addShape("rect", { x: 0, y: 0, w: 0.4, h: 7.5, fill: { color: GOLD } });

s1.addText("CONSOLIDADO ACTIVIDAD 1", {
  x: 1.0, y: 1.6, w: 11.5, h: 0.7,
  fontSize: 28, fontFace: "Calibri", color: GOLD, bold: true, charSpacing: 8,
});

s1.addText("SEMANA 3", {
  x: 1.0, y: 2.3, w: 11.5, h: 1.4,
  fontSize: 72, fontFace: "Georgia", color: WHITE, bold: true,
});

s1.addShape("line", {
  x: 1.0, y: 3.85, w: 3.0, h: 0,
  line: { color: GOLD, width: 3 },
});

s1.addText("Foro 1: El Transporte Aéreo", {
  x: 1.0, y: 4.0, w: 11.5, h: 0.5,
  fontSize: 24, fontFace: "Calibri", color: WHITE, italic: true,
});

s1.addText("Cálculo I  ·  Grupo A02  ·  Politécnico Grancolombiano", {
  x: 1.0, y: 4.6, w: 11.5, h: 0.4,
  fontSize: 16, fontFace: "Calibri", color: "CADCFC",
});

s1.addText("Tutora: Andrea Abaunza Galvis  ·  Abril 2026", {
  x: 1.0, y: 6.7, w: 11.5, h: 0.4,
  fontSize: 12, fontFace: "Calibri", color: "CADCFC", italic: true,
});

// =====================================================
// SLIDE 2: INTEGRANTES
// =====================================================
const s2 = pres.addSlide();
s2.background = { color: LIGHT };

s2.addShape("rect", { x: 0, y: 0, w: 13.33, h: 1.2, fill: { color: NAVY } });
s2.addText("INTEGRANTES DEL SUBGRUPO", {
  x: 0.5, y: 0.3, w: 12.33, h: 0.6,
  fontSize: 28, fontFace: "Georgia", color: WHITE, bold: true, charSpacing: 4,
});
s2.addText("Foro 1: El Transporte Aéreo  ·  Cálculo I — Grupo A02", {
  x: 0.5, y: 0.8, w: 12.33, h: 0.3,
  fontSize: 12, fontFace: "Calibri", color: "CADCFC",
});

const integrantes = [
  "[Nombre Estudiante 1]",
  "[Nombre Estudiante 2]",
  "[Nombre Estudiante 3]",
  "[Nombre Estudiante 4]",
  "[Nombre Estudiante 5]",
];

let yPos = 2.0;
integrantes.forEach((nombre, i) => {
  // Círculo con número
  s2.addShape("ellipse", {
    x: 2.5, y: yPos, w: 0.6, h: 0.6,
    fill: { color: GOLD }, line: { color: NAVY, width: 0 },
  });
  s2.addText(`${i + 1}`, {
    x: 2.5, y: yPos, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: NAVY, bold: true, align: "center", valign: "middle",
  });
  // Nombre
  s2.addText(nombre, {
    x: 3.4, y: yPos, w: 7.5, h: 0.6,
    fontSize: 22, fontFace: "Calibri", color: NAVY, bold: true, valign: "middle",
  });
  yPos += 0.75;
});

s2.addText("Pie: Politécnico Grancolombiano  ·  Tutora: Andrea Abaunza Galvis", {
  x: 0.5, y: 7.05, w: 12.33, h: 0.3,
  fontSize: 10, fontFace: "Calibri", color: GRAY, italic: true, align: "center",
});

// =====================================================
// SLIDES 3-8: UNA POR CADA MAPA
// =====================================================
const mapas = [
  { archivo: "calculo-mapa-ley-seno.png", tema: "Ley del Seno", autor: "[Estudiante 1]", num: "01" },
  { archivo: "calculo-mapa-ley-coseno.png", tema: "Ley del Coseno", autor: "[Estudiante 1]", num: "02" },
  { archivo: "Infografia Calculo 1 Escenario 3.png", tema: "Teorema de Pitágoras  ·  Conversión Radianes/Grados", autor: "[Estudiante 2]", num: "03" },
  { archivo: "image-1.png", tema: "Teorema de Pitágoras  ·  Ley del Seno", autor: "[Estudiante 3]", num: "04" },
  { archivo: "LEY DEL COSENO-1.jpg", tema: "Ley del Coseno  ·  Coordenadas Esféricas", autor: "[Estudiante 4]", num: "05" },
  { archivo: "Primera entrega Calculo 1.png", tema: "Sistema GMS  ·  Ley de Haversine", autor: "[Estudiante 5]", num: "06" },
];

mapas.forEach((m) => {
  const s = pres.addSlide();
  s.background = { color: LIGHT };

  // Banda superior
  s.addShape("rect", { x: 0, y: 0, w: 13.33, h: 0.9, fill: { color: NAVY } });
  // Acento dorado
  s.addShape("rect", { x: 0, y: 0.9, w: 13.33, h: 0.05, fill: { color: GOLD } });

  // Número grande lateral
  s.addText(m.num, {
    x: 0.4, y: 0.1, w: 1.0, h: 0.7,
    fontSize: 36, fontFace: "Georgia", color: GOLD, bold: true,
  });

  // Título
  s.addText(m.tema, {
    x: 1.5, y: 0.15, w: 11.5, h: 0.6,
    fontSize: 22, fontFace: "Calibri", color: WHITE, bold: true, valign: "middle",
  });

  // Imagen centrada
  s.addImage({
    path: path.join(IMG_DIR, m.archivo),
    x: 1.5, y: 1.3, w: 10.33, h: 5.4,
    sizing: { type: "contain", w: 10.33, h: 5.4 },
  });

  // Autor (pie)
  s.addText(`Autor: ${m.autor}`, {
    x: 0.5, y: 6.95, w: 6.0, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: NAVY, italic: true, bold: true,
  });

  s.addText("Consolidado Activ. 1 · Semana 3 · Foro Transporte Aéreo", {
    x: 6.83, y: 6.95, w: 6.0, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: GRAY, align: "right",
  });
});

// =====================================================
// SLIDE FINAL: CIERRE
// =====================================================
const sf = pres.addSlide();
sf.background = { color: NAVY };

sf.addShape("rect", { x: 0, y: 3.4, w: 13.33, h: 0.05, fill: { color: GOLD } });

sf.addText("¡Gracias!", {
  x: 0.5, y: 1.8, w: 12.33, h: 1.5,
  fontSize: 80, fontFace: "Georgia", color: WHITE, bold: true, align: "center", italic: true,
});

sf.addText("Trabajo Colaborativo — El Transporte Aéreo", {
  x: 0.5, y: 3.8, w: 12.33, h: 0.5,
  fontSize: 22, fontFace: "Calibri", color: GOLD, align: "center",
});

sf.addText("Politécnico Grancolombiano", {
  x: 0.5, y: 5.5, w: 12.33, h: 0.4,
  fontSize: 16, fontFace: "Calibri", color: "CADCFC", align: "center",
});

sf.addText("Facultad de Ingeniería, Diseño e Innovación  ·  Cálculo I — Grupo A02", {
  x: 0.5, y: 5.95, w: 12.33, h: 0.35,
  fontSize: 12, fontFace: "Calibri", color: "CADCFC", align: "center", italic: true,
});

sf.addText("Tutora: Andrea Abaunza Galvis  ·  Abril 2026", {
  x: 0.5, y: 6.4, w: 12.33, h: 0.35,
  fontSize: 12, fontFace: "Calibri", color: "CADCFC", align: "center",
});

// Guardar
pres.writeFile({ fileName: OUT })
  .then(f => console.log("OK: " + f))
  .catch(e => { console.error("ERROR:", e); process.exit(1); });
