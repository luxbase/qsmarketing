import { WHATSAPP_NUMBER } from '../constants';

export default {
  lang: 'es',
  label: 'Español',
  meta: {
    title: 'Qualis Studio | Transformación Visual Premium',
    description: 'Transformamos imágenes en activos profesionales que generan más impacto. Staging digital, optimización de fotos y contenido visual premium con IA.',
  },
  layout: {
    skipToContent: 'Ir al contenido principal',
  },
  header: {
    homeLabel: 'Inicio de Qualis Studio',
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Qualis%20Studio!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20staging%20digital.`,
    servicios: 'Servicios',
    proceso: 'Proceso',
    resultados: 'Resultados',
    faq: 'FAQ',
    nosotros: 'Quiénes somos',
    cta: 'Solicitar →',
    whatsapp: 'WhatsApp',
  },
  hero: {
    h1: 'Aumenta el valor percibido de cada propiedad.',
    p: 'Fotos mejoradas, texto sin errores y ambientes decorados digitalmente en 24 horas — para que tu propiedad venda sola.',
    cta: 'Mejorar mi publicación →',
  },
  comparison: {
    heading: 'Visualizá el impacto',
    original: 'Original',
    staging: 'Staging',
    styles: ['Mediterráneo', 'Manhattan', 'Minimalista'],
  },
  features: {
    heading: 'Por qué el marketing visual importa',
    p: 'En un mercado saturado, la primera impresión es digital. No dejes que una mala foto detenga tu venta.',
    cards: [
      {
        icon: '👁️',
        title: 'La primera impresión es digital',
        text: 'La mayoría de los compradores empieza en portales. Si la foto no impacta hoy, probablemente no haya visita mañana.',
      },
      {
        icon: '⏱️',
        title: 'Más consultas, menos tiempo en venta',
        text: 'Las propiedades con staging digital reciben más consultas y tienden a venderse más rápido que aquellas con fotos comunes.',
      },
      {
        icon: '⭐',
        title: 'Haz que tus propiedades brillen',
        text: 'Presentaciones visuales de alto impacto que elevan tu marca personal y diferencian cada publicación.',
      },
    ],
  },
  pricing: {
    heading: 'Elegí tu plan',
    p: 'Tres formas de mejorar tu listing. Sin visitas, sin fotógrafo.',
    cards: [
      {
        name: 'Por Propiedad',
        price: '$49',
        per: '/ propiedad',
        subtitle: 'Sin compromiso',
        features: [
          'Nos enviás las fotos o las bajamos del portal',
          'Corregimos color, luz y nitidez',
          'Amoblamos virtualmente la propiedad',
          'Perfeccionamos el texto de tu publicación',
          'Recibís el ZIP en 24 horas',
        ],
    cta: 'Mejorar mi publicación →',
        ctaUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Qualis%20Studio!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20staging%20digital.`,
      },
      {
        name: 'Plan Pro',
        price: '$189',
        per: '/ mes',
        subtitle: '5 propiedades incluidas · Adicional $37 c/u',
        popular: true,
        features: [
          'Nos enviás las fotos o las bajamos del portal',
          'Corregimos color, luz y nitidez',
          'Amoblamos virtualmente la propiedad',
          'Perfeccionamos el texto de tu publicación',
          'Recibís el ZIP en 24 horas',
          'Grupo de WhatsApp dedicado',
        ],
        cta: 'Empezar →',
        ctaUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Qualis!%20Quiero%20consultar%20por%20el%20Plan%20Pro.`,
      },
      {
        name: 'Plan Agencia',
        price: '$490',
        per: '/ mes',
        subtitle: '15 propiedades incluidas · Adicional $32 c/u',
        features: [
          'Nos enviás las fotos o las bajamos del portal',
          'Corregimos color, luz y nitidez',
          'Amoblamos virtualmente la propiedad',
          'Perfeccionamos el texto de tu publicación',
          'Recibís el ZIP en 24 horas',
          'Grupo de WhatsApp dedicado',
          'Texto bilingüe (ES + PT o EN)',
        ],
        cta: 'Contactar →',
        ctaUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Qualis!%20Quiero%20consultar%20por%20el%20Plan%20Agencia.`,
      },
    ],
    popularBadge: 'RECOMENDADO',
    pricingCta: 'Mejorar mi publicación →',
    paymentNote: 'Todos los planes incluyen fotos ilimitadas por propiedad + texto optimizado.',
    coldStart: {
      title: '★ ★ ¿Primera vez? Tu primer listing va gratis.',
      desc: 'Cupo limitado a las primeras 10 agencias. Consultanos por WhatsApp sin compromiso.',
      cta: 'Reclamar →',
      waUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Qualis%20Studio!%20Quiero%20reclamar%20mi%20primer%20listing%20gratis.`,
      referral: '💰 ¿Tenés colegas? Por cada agencia referida, recibís 10% de descuento en tu próximo servicio.',
    },
  },
  process: {
    heading: 'Tu propiedad lista en 3 pasos',
    p: 'Sin visitas, sin fotógrafo. Todo por WhatsApp o portal.',
    steps: [
      {
        title: 'Mandás tu listing',
        text: 'Nos enviás las fotos que ya tenés o el link del portal. También podés compartir acceso.',
      },
      {
        title: 'Mejoramos',
        text: 'Corregimos color, luz y nitidez. Reescribimos el texto. Decoramos ambientes digitalmente.',
      },
      {
        title: 'Recibís',
        text: 'Te devolvemos el ZIP listo para publicar o editamos el portal directamente por vos.',
      },
    ],
  },
  about: {
    heading: 'Quiénes somos',
    text: 'Somos un estudio de tecnología visual en Asunción. No venimos del mundo inmobiliario — venimos del diseño, la inteligencia artificial y la producción de contenido digital. Usamos IA de última generación con supervisión humana para que cada foto y cada texto salga impecable. Atención local, calidad internacional.',
  },
  faq: {
    heading: 'Preguntas Frecuentes',
    items: [
      {
        q: '¿Tengo que mover muebles o decorar la propiedad?',
        a: 'No es necesario. Nosotros capturamos el espacio tal cual está y luego realizamos la decoración virtual sobre la imagen real en post-producción.',
      },
      {
        q: '¿En cuánto tiempo recibo el material final?',
        a: 'En hasta 24 horas desde que obtenemos las fotos, tendrás tu presentación visual lista para publicar.',
      },
      {
        q: '¿Llegan a todo el país?',
        a: 'Trabajamos con propiedades en todo Paraguay. Sin importar dónde se encuentre el inmueble, podemos ayudarte a crear una presentación visual profesional.',
      },
      {
        q: '¿Qué estilos de decoración utilizan?',
        a: 'Elige entre tres estilos cuidadosamente diseñados: moderno, industrial o clásico. Cada uno aporta una identidad única para resaltar el potencial de tu propiedad.',
      },
      {
        q: '¿Las fotos sirven para portales y redes sociales?',
        a: 'Sí. Todo el material se entrega en alta resolución para portales y optimizado para Instagram, TikTok y Facebook.',
      },
      {
        q: '¿El staging digital no es engañar al comprador?',
        a: 'No. El staging digital es una práctica estándar en mercados como Estados Unidos, Europa y Brasil. No modifica la estructura ni las dimensiones de la propiedad — muestra el potencial del espacio con mobiliario ilustrativo. Recomendamos siempre informar en la publicación que las imágenes incluyen decoración digital.',
      },
    ],
    cta: 'Solicitar →',
  },
  modal: {
    title: 'Solicitá tu muestra gratis de staging',
    description: 'Enviános las fotos de tu propiedad y crearemos una imagen con staging profesional sin costo. Revisaremos tu solicitud y te contactaremos personalmente para analizar las mejores opciones para tu publicación.',
    closeLabel: 'Cerrar',
    stepIndicator: 'Paso {n} de 4',
    steps: [
      {
        nameLabel: '¿Cuál es tu nombre?',
        namePlaceholder: 'Tu nombre',
        nameError: 'Mínimo 2 caracteres',
        modeLabel: '¿Qué modo preferís?',
        modes: [
          { value: 'Per Property', label: 'Por Propiedad ($49)', desc: 'Nos enviás las fotos, te devolvemos el staging' },
          { value: 'Plan Pro', label: 'Plan Pro ($189/mes)', desc: '5 propiedades incluidas + entrega prioritaria' },
          { value: 'Plan Agencia', label: 'Plan Agencia ($490/mes)', desc: '15 propiedades incluidas + texto bilingüe' },
        ],
      },
      {
        emailLabel: '¿Cuál es tu email?',
        emailPlaceholder: 'tu@email.com',
        emailError: 'Email inválido',
        phoneLabel: 'WhatsApp o teléfono (opcional)',
        phonePlaceholder: '+595 981 123 456',
      },
      {
        photoLabel: 'Foto de prueba',
        dropText: 'Haz clic o arrastra una foto',
        dropFormat: 'PNG o JPG · Máx 5 MB',
        photoErrorFormat: 'Solo PNG o JPG',
        photoErrorSize: 'Máximo 5 MB',
      },
      {
        styleLabel: 'Estilo de muestra',
        styles: ['Mediterráneo', 'Manhattan', 'Minimalista'],
        privacyConsent: 'Acepto la política de privacidad',
        privacyLink: '(acepto la política de privacidad)',
      },
    ],
    back: 'Atrás',
    next: 'Siguiente',
    submit: 'Solicitar muestra gratis',
    loadingTitle: 'Enviando solicitud',
    loading: 'Procesando tu muestra gratis...',
    loadingSteps: [
      'Optimizando imágenes...',
      'Conectando con Google Drive seguro...',
      'Creando carpeta y guardando archivos...',
      'Finalizando tu solicitud...'
    ],
    success: {
      title: '¡Solicitud enviada!',
      text: 'Tu solicitud fue enviada para procesarla. Si no recibís respuesta en 24 horas, escribinos por WhatsApp para confirmarla.',
      waCta: 'Escribinos por WhatsApp →',
      waMessage: 'Hola Qualis Studio! Soy {name}. Envié mi solicitud de muestra gratis de staging.',
      newRequest: 'Nueva solicitud',
    },
    error: {
      title: 'Algo salió mal',
      text: 'Intenta de nuevo más tarde.',
      retry: 'Intentar de nuevo',
    },
  },
  privacy: {
    metaTitle: 'Privacidad | Qualis Studio',
    backHome: '← Volver al inicio',
    metaDescription: 'Política de privacidad y tratamiento de fotos para las pruebas de staging digital de Qualis Studio.',
    heading: 'Privacidad',
    intro: 'Qualis Studio usa los datos que nos enviás para responder tu solicitud de staging digital, procesar la foto de prueba y entregarte el resultado por email o WhatsApp.',
    sections: [
      {
        heading: 'Datos que recibimos',
        text: 'Podemos recibir tu nombre, email, estilo elegido y la foto que adjuntás. Las fotos de propiedades pueden incluir información privada del inmueble o de sus ocupantes; enviá solo imágenes que estés autorizado a compartir.',
      },
      {
        heading: 'Uso y retención',
        text: 'Usamos la información únicamente para preparar la prueba, coordinar la entrega y mejorar el servicio. Para el MVP manual, conservamos la foto y los datos solo el tiempo necesario para procesar y dar seguimiento a la solicitud.',
      },
      {
        heading: 'Terceros',
        text: 'El formulario envía los datos y archivos de forma segura a nuestro almacenamiento privado en Google Drive, y la coordinación puede continuar por email o WhatsApp. Cuando el producto evolucione a SaaS, esta página deberá actualizarse con los proveedores de hosting, storage, autenticación y procesamiento que se adopten.',
      },
      {
        heading: 'Eliminación',
        text: 'Podés pedir que eliminemos tus fotos y datos de la prueba respondiendo al mismo canal por el que coordinamos la entrega.',
      },
    ],
  },
  footer: {
    tagline: 'Servicio 100% remoto · Todo Paraguay',
    resultados: 'Resultados',
    faq: 'FAQ',
    whatsapp: 'WhatsApp',
    privacidad: 'Privacidad',
    slider: 'Slider',
    copyright: 'Qualis Studio — Asunción, Paraguay',
  },
  languageSelector: 'Seleccionar idioma',
};
