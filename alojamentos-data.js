(function () {
  var whatsappNumber = '351927155336';

  var icons = {
    stay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V21H3V10.5z"/><path d="M9 21v-7h6v7"/></svg>',
    camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h4l2-3h4l2 3h4v13H4V7z"/><circle cx="12" cy="13" r="4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-5.25 7-12a7 7 0 0 0-14 0c0 6.75 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
  };

  var listings = [
  {
    "type": "casas",
    "badge": "Casa",
    "title": "Casa Laurinha",
    "meta": "Casa",
    "feature": "2 quartos",
    "cover": "alojamentos/casas/Casa Laurinha/esta.jpg",
    "preview": [
      "alojamentos/casas/Casa Laurinha/esta.jpg",
      "alojamentos/casas/Casa Laurinha/2.jpg",
      "alojamentos/casas/Casa Laurinha/10.jpg",
      "alojamentos/casas/Casa Laurinha/IMG_2051.jpg"
    ],
    "gallery": [
      "alojamentos/casas/Casa Laurinha/00b520e7-c314-4473-bf8e-806991541b3a.jpg",
      "alojamentos/casas/Casa Laurinha/2.jpg",
      "alojamentos/casas/Casa Laurinha/3.jpg",
      "alojamentos/casas/Casa Laurinha/4.jpg",
      "alojamentos/casas/Casa Laurinha/4db2a436-cd8f-4616-b0eb-5912ca4f7994.jpg",
      "alojamentos/casas/Casa Laurinha/5.jpg",
      "alojamentos/casas/Casa Laurinha/6.jpg",
      "alojamentos/casas/Casa Laurinha/7.jpg",
      "alojamentos/casas/Casa Laurinha/8.jpg",
      "alojamentos/casas/Casa Laurinha/9.jpg",
      "alojamentos/casas/Casa Laurinha/9a6ebe7e-d392-46ad-a9b2-c2a1027c0cb4.jpg",
      "alojamentos/casas/Casa Laurinha/10.jpg",
      "alojamentos/casas/Casa Laurinha/11.jpg",
      "alojamentos/casas/Casa Laurinha/12.jpg",
      "alojamentos/casas/Casa Laurinha/13.jpg",
      "alojamentos/casas/Casa Laurinha/14.jpg",
      "alojamentos/casas/Casa Laurinha/15.jpg",
      "alojamentos/casas/Casa Laurinha/16.jpg",
      "alojamentos/casas/Casa Laurinha/17.jpg",
      "alojamentos/casas/Casa Laurinha/18.jpg",
      "alojamentos/casas/Casa Laurinha/19.jpg",
      "alojamentos/casas/Casa Laurinha/20.jpg",
      "alojamentos/casas/Casa Laurinha/21.jpg",
      "alojamentos/casas/Casa Laurinha/22.jpg",
      "alojamentos/casas/Casa Laurinha/23.jpg",
      "alojamentos/casas/Casa Laurinha/c8719e82-407f-4978-8db6-5c59d06adc86.jpg",
      "alojamentos/casas/Casa Laurinha/ddbf4cb4-26b2-4464-bae4-7d80a97c6f1c.jpg",
      "alojamentos/casas/Casa Laurinha/esta.jpg",
      "alojamentos/casas/Casa Laurinha/fad0a3aa-59f3-41ee-a0ac-58cfd7129c52.jpg",
      "alojamentos/casas/Casa Laurinha/IMG_2051.jpg",
      "alojamentos/casas/Casa Laurinha/IMG_2056.jpg",
      "alojamentos/casas/Casa Laurinha/IMG_2060.jpg"
    ],
    "capacity": "5 hóspedes",
    "address": "Rua de Pelzinhos 107, 4990-545 Pte. de Lima",
    "description": "Casa completa e acolhedora para famílias ou pequenos grupos, com dois quartos de casal e zona extra de descanso.",
    "units": [
      {
        "name": "Casa completa",
        "details": "5 hóspedes, 2 quartos com cama de casal e 1 sofá-cama para 1 pessoa"
      }
    ]
  },
  {
    "type": "casas",
    "badge": "Casa",
    "title": "Casa das Pereiras",
    "meta": "Casa",
    "feature": "2 quartos",
    "cover": "alojamentos/casas/Casa das Pereiras/IMG_4513.jpg",
    "preview": [
      "alojamentos/casas/Casa das Pereiras/IMG_4513.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4507.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4491.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4498.jpg"
    ],
    "gallery": [
      "alojamentos/casas/Casa das Pereiras/75c76ea8-a2bb-4c2e-9345-c115f6bfada1.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4491-2.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4491.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4492-2.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4493-2.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4495.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4498.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4499-2.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4501.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4503.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4506.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4507.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4513.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4515.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4519.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4520.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4524.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4525.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4531.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4532.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4536.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4538.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4539.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4540.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4541.jpg",
      "alojamentos/casas/Casa das Pereiras/IMG_4546.jpg"
    ],
    "capacity": "5 hóspedes",
    "address": "Tv. Sra. das Neves 1 a 3, 4990-011 Pte. de Lima",
    "description": "Casa completa para estadias tranquilas em família ou grupo pequeno, com ambiente acolhedor e localização prática.",
    "units": [
      {
        "name": "Casa completa",
        "details": "5 hóspedes, 2 quartos com cama de casal e 1 sofá-cama para 1 pessoa"
      }
    ]
  },
  {
    "type": "apartamentos",
    "badge": "Apartamento",
    "title": "Aurega Vintage T4",
    "meta": "Apartamento",
    "feature": "4 quartos",
    "cover": "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6583.jpg",
    "preview": [
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6583.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6603.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6617.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9747.jpg"
    ],
    "gallery": [
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6583.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6588.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6591.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6595.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6596.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6597.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6601.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6603.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6606.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6609.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6610.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6612.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6615.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6616.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6617.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6619.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6620.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6622.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6623.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6626.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6629.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6630.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6635.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A6637.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9747.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9750.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9782.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9814.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9817.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9825.jpg",
      "alojamentos/apartamentos/Fotos An｣ncio 2/QA2A9826.jpg"
    ],
    "capacity": "8 hóspedes",
    "address": "Rua de S. Miguel da Aurega 94, 4990-163 Pte. de Lima",
    "description": "Apartamento T4 vintage para grupos e famílias, com possibilidade complementar de aluguer ao quarto através do Aurega Vintage Bedrooms.",
    "units": [
      {
        "name": "Apartamento completo",
        "details": "8 hóspedes, 3 quartos com cama de casal e 1 quarto com 2 camas de solteiro"
      }
    ]
  },
  {
    "type": "apartamentos",
    "badge": "Apartamentos",
    "title": "Plátanos & River Apartments",
    "meta": "Apartamentos",
    "feature": "3 apartamentos",
    "capacity": "até 14 hóspedes",
    "address": "Rua dos Terceiros 1, 2 e 3, 4990-109 Pte. de Lima",
    "description": "Conjunto de três apartamentos no centro de Ponte de Lima, com opções para estadias de 4 a 5 hóspedes por unidade.",
    "cover": "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3429.jpg",
    "preview": [
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3429.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3408.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3416.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3445.jpg"
    ],
    "gallery": [
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3431-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3432-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3434-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3435-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3435.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3436.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3437.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3438-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3438.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3439.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3440.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3441-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3441.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3442-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3442.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3445.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/A/IMG_3446.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3398.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3399-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3399.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3400-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3400.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3401-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3401.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3402-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3402.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3429.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3430.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3431.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/B/IMG_3436-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3408.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3409.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3410.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3412-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3412.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3413-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3414.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3416-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3416.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3417.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3418.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3419.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3421-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3421.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3422-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3422.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3423-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3423.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3424.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3428-2.jpg",
      "alojamentos/apartamentos/Platanos & River Apartments/C/IMG_3429-2.jpg"
    ],
    "units": [
      {
        "name": "Apartamento A",
        "details": "4 hóspedes, 1 cama de casal e 1 sofá-cama para 2 pessoas"
      },
      {
        "name": "Apartamento B",
        "details": "5 hóspedes, 1 cama de casal, 1 sofá-cama para 2 pessoas e 1 sofá-cama para 1 pessoa"
      },
      {
        "name": "Apartamento C",
        "details": "5 hóspedes, 1 cama de casal, 1 sofá-cama para 2 pessoas e 1 sofá-cama para 1 pessoa"
      }
    ]
  },
  {
    "type": "apartamentos",
    "badge": "Apartamento",
    "title": "Casa do Foral",
    "meta": "Apartamento",
    "feature": "3 unidades",
    "cover": "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8301.jpg",
    "preview": [
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8301.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8312.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8320.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9853.jpg"
    ],
    "gallery": [
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8301.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8302.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8303.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8305.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8309.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8310.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8311.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8312.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8314.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8315.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8317.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8318.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8319.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8320.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8322.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8325.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8327.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8329.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8330.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8332.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8334.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8337.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8338.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8339.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8341.jpg",
      "alojamentos/apartamentos/Casa do Foral/Apartamento Rio Lima/Fotos an｣ncio/QA2A8345.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9853.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9855.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9859.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9860.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9862.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9864.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9872.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9877.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9880.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9881.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9891.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9893.jpg",
      "alojamentos/apartamentos/Casa do Foral/Su¡te Brutus - Fotos An£ncio/QA2A9895.jpg"
    ],
    "capacity": "até 9 hóspedes",
    "address": "R. Detrás dos Palheiros 16, 4990-000 Pte. de Lima",
    "description": "Conjunto de unidades independentes no coração histórico de Ponte de Lima, pensado para estadias flexíveis em casal, família ou grupo.",
    "units": [
      {
        "name": "Estúdio - Dona Teresa",
        "details": "2 hóspedes, 1 cama de casal"
      },
      {
        "name": "Suíte - Brutus",
        "details": "3 hóspedes, 1 cama de casal e 1 cama de solteiro"
      },
      {
        "name": "Apartamento Duplex - Rio Lima",
        "details": "4 hóspedes, 1 cama de casal e 2 camas de solteiro"
      }
    ]
  },
  {
    "type": "apartamentos",
    "badge": "Apartamento",
    "title": "Encanto do Lima",
    "meta": "Apartamento",
    "feature": "3 quartos",
    "cover": "alojamentos/apartamentos/Encanto do Lima/QA2A7400.jpg",
    "preview": [
      "alojamentos/apartamentos/Encanto do Lima/QA2A7400.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7387.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7411.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7462.jpg"
    ],
    "gallery": [
      "alojamentos/apartamentos/Encanto do Lima/QA2A7351.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7358.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7363.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7364.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7365.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7370.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7377.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7387.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7396.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7400.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7403.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7404.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7409.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7411.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7413.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7417.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7419.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7422.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7424.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7425.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7428.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7432.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7446.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7448.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7451.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7462.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7464.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7467.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7471.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7474.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7482.jpg",
      "alojamentos/apartamentos/Encanto do Lima/QA2A7487.jpg"
    ],
    "capacity": "6 hóspedes",
    "address": "Calçada dos Artistas 8, 4990-036 Pte. de Lima",
    "description": "Apartamento luminoso e central, preparado para famílias ou grupos que procuram uma base confortável em Ponte de Lima.",
    "units": [
      {
        "name": "Apartamento",
        "details": "6 hóspedes, 1 quarto com cama de casal, 2 quartos com cama de solteiro e 1 sofá-cama para 2 pessoas"
      }
    ]
  },
  {
    "type": "apartamentos",
    "badge": "Apartamento",
    "title": "Apartamento João Paulo II",
    "meta": "Apartamento",
    "feature": "1 quarto",
    "cover": "alojamentos/apartamentos/Fotos an｣ncio/QA2A1740.jpg",
    "preview": [
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1740.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1700.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1717.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1759.jpg"
    ],
    "gallery": [
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1679.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1698.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1700.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1702.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1709.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1712.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1713.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1717.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1720.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1721.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1723.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1724.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1725.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1728.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1730.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1732.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1734.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1738.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1740.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1742.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1745.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1759.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1764.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1765.jpg",
      "alojamentos/apartamentos/Fotos an｣ncio/QA2A1768.jpg"
    ],
    "capacity": "4 hóspedes",
    "address": "R. Papa João Paulo II 228, 4990-177 Pte. de Lima",
    "description": "Apartamento confortável para estadias em casal, família pequena ou grupo reduzido em Ponte de Lima.",
    "units": [
      {
        "name": "Apartamento",
        "details": "4 hóspedes, 1 cama de casal e 1 sofá-cama para 2 pessoas"
      }
    ]
  },
  {
    "type": "quartos",
    "badge": "Quartos",
    "title": "Anoitecer Itinerante - Vintage Bedrooms",
    "meta": "Quartos",
    "feature": "9 quartos",
    "cover": "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3075.jpg",
    "preview": [
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3075.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3049.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3059.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3018-2.jpg"
    ],
    "gallery": [
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3018-2.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3019.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3020.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3022.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3023.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3024.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3026.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3030.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3032.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3033.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3034.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3041.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3044.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Entrada/QA2A3045.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3130.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3131.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3132.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3134.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3136.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3138.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto com 2 camas de solteiro/23 - 3§ andar com varanda/QA2A3140.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3047.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3048.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3049.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3051.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3052.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3053.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3054.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/3 - 1§ andar/QA2A3057.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3059.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3060.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3061.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3062.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3063.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3070.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/8 - 2§ andar com varanda/QA2A3072.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3075.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3076.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3077.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3079.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3080.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3081.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3084.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3085.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3086.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3088.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3089.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/9 - 2§ andar/QA2A3093.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3097.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3098.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3099.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3100.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3103.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3104.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3105.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/11 - 2§ andar/QA2A3106.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3142.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3143.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3144.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3145.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3149.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3151.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3156.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/24 - 3§ andar com banheira/QA2A3158.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3159.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3161.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3162.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3166.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3167.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto de casal/26 - 3§ andar com banheira/QA2A3168.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3117.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3119.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3120.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3122.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3123.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto familiar/30 - 3§ andar/QA2A3128.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto individual/22 - 3§ andar/QA2A3110.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto individual/22 - 3§ andar/QA2A3112.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto individual/22 - 3§ andar/QA2A3113.jpg",
      "alojamentos/quartos/ANOITECER ITINERANTE/Quarto individual/22 - 3§ andar/QA2A3114.jpg"
    ],
    "capacity": "até 19 hóspedes",
    "address": "R. da Lebre 10, 4990-388 Pte. de Lima",
    "description": "Alojamento de quartos vintage no centro de Ponte de Lima, com várias tipologias para estadias individuais, a dois ou em família.",
    "units": [
      {
        "name": "5 quartos de casal",
        "details": "2 hóspedes por quarto"
      },
      {
        "name": "1 quarto de solteiro",
        "details": "1 hóspede"
      },
      {
        "name": "1 quarto twin com varanda",
        "details": "2 hóspedes, 2 camas de solteiro"
      },
      {
        "name": "1 quarto de casal com varanda",
        "details": "2 hóspedes"
      },
      {
        "name": "1 quarto familiar",
        "details": "4 hóspedes, 1 cama de casal e 2 camas de solteiro"
      }
    ]
  },
  {
    "type": "quartos",
    "badge": "Quartos",
    "title": "Aurega Vintage Bedrooms",
    "meta": "Quartos",
    "feature": "4 tipologias",
    "cover": "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6606.jpg",
    "preview": [
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6606.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6617.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal/QA2A6626.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Twin/QA2A6615.jpg"
    ],
    "gallery": [
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal/QA2A6626.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal/QA2A6630.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6617.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6619.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6620.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6622.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal com varanda/QA2A6623.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6606.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6609.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6610.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Casal superior com varanda/QA2A6612.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Twin/QA2A6615.jpg",
      "alojamentos/quartos/Aurega Vintage Bedrooms/Twin/QA2A6616.jpg"
    ],
    "capacity": "até 2 hóspedes por quarto",
    "address": "Rua de S. Miguel da Aurega 94, 4990-163 Pte. de Lima",
    "description": "Quartos vintage no mesmo edifício do Aurega Vintage T4, ideais para reservas individuais ou estadias mais curtas.",
    "units": [
      {
        "name": "Quarto de casal",
        "details": "2 hóspedes, 1 cama de casal"
      },
      {
        "name": "Quarto de casal com varanda",
        "details": "2 hóspedes, 1 cama de casal"
      },
      {
        "name": "Quarto de casal superior com varanda e WC privativo",
        "details": "2 hóspedes, 1 cama de casal"
      },
      {
        "name": "Quarto twin",
        "details": "2 hóspedes, 2 camas de solteiro"
      }
    ]
  }
];

  var modal;
  var activeListing = null;
  var activePhotos = [];
  var activePhotoIndex = 0;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function unique(values) {
    var seen = {};
    return values.filter(function (value) {
      if (!value || seen[value]) return false;
      seen[value] = true;
      return true;
    });
  }

  function galleryPhotos(listing) {
    return unique([listing.cover].concat(listing.gallery || []));
  }

  function previewPhotos(listing) {
    return unique([listing.cover].concat(listing.preview || listing.gallery || [])).slice(0, 4);
  }

  function whatsappUrl(title) {
    var text = 'Olá! Tenho interesse no alojamento ' + title + '. Podiam dar-me mais informações sobre disponibilidade e preços?';
    return 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);
  }

  function mapsUrl(address) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address || '');
  }

  function thumbnailMarkup(listing) {
    return previewPhotos(listing).slice(1).map(function (photo, index) {
      return '<img src="' + photo + '" alt="' + escapeHtml(listing.title) + ' - fotografia ' + (index + 2) + '" loading="lazy">';
    }).join('');
  }

  function unitMarkup(listing) {
    return (listing.units || []).map(function (unit) {
      return [
        '<li>',
        '  <strong>' + escapeHtml(unit.name) + '</strong>',
        '  <span>' + escapeHtml(unit.details) + '</span>',
        '</li>'
      ].join('');
    }).join('');
  }

  function photoLabel(count) {
    return count + (count === 1 ? ' fotografia' : ' fotografias');
  }

  function listingCard(listing, index) {
    var photoCount = galleryPhotos(listing).length;
    return [
      '<article class="listing-card" data-type="' + listing.type + '" data-listing-index="' + index + '" tabindex="0" role="button" aria-label="Ver mais informações de ' + escapeHtml(listing.title) + '">',
      '  <div class="listing-img-wrap">',
      '    <img src="' + listing.cover + '" alt="' + escapeHtml(listing.title) + '" loading="lazy">',
      '    <span class="listing-type-badge">' + escapeHtml(listing.badge) + '</span>',
      '  </div>',
      '  <div class="listing-body">',
      '    <h3 class="listing-name">' + escapeHtml(listing.title) + '</h3>',
      '    <p class="listing-location">' + escapeHtml(listing.meta) + '</p>',
      '    <div class="listing-amenities">',
      '      <span class="listing-amenity">' + icons.stay + escapeHtml(listing.feature) + '</span>',
      '      <span class="listing-amenity">' + icons.users + escapeHtml(listing.capacity || 'Sob consulta') + '</span>',
      '      <span class="listing-amenity">' + icons.camera + photoLabel(photoCount) + '</span>',
      '    </div>',
      '    <p class="listing-address">' + icons.pin + escapeHtml(listing.address || 'Ponte de Lima') + '</p>',
      '    <div class="listing-photo-strip">' + thumbnailMarkup(listing) + '</div>',
      '    <p class="listing-more">Mais informações e galeria completa</p>',
      '    <div class="listing-footer">',
      '      <div class="listing-price">Sob consulta</div>',
      '      <a href="' + whatsappUrl(listing.title) + '" target="_blank" rel="noopener noreferrer" class="btn-wa-listing">' + icons.chat + 'Reservar</a>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function ensureModal() {
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'listing-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = [
      '<div class="listing-modal-backdrop" data-modal-close></div>',
      '<section class="listing-modal-panel" role="dialog" aria-modal="true" aria-labelledby="listing-modal-title">',
      '  <button type="button" class="listing-modal-close" data-modal-close aria-label="Fechar">&times;</button>',
      '  <div class="listing-modal-gallery">',
      '    <div class="listing-modal-image-frame">',
      '      <img class="listing-modal-image" src="" alt="">',
      '      <button type="button" class="listing-gallery-nav listing-gallery-prev" aria-label="Fotografia anterior">' + icons.arrowLeft + '</button>',
      '      <button type="button" class="listing-gallery-nav listing-gallery-next" aria-label="Fotografia seguinte">' + icons.arrowRight + '</button>',
      '      <span class="listing-modal-counter"></span>',
      '    </div>',
      '  </div>',
      '  <aside class="listing-modal-info">',
      '    <p class="listing-modal-eyebrow">Mais informações</p>',
      '    <h2 id="listing-modal-title"></h2>',
      '    <p class="listing-modal-meta"></p>',
      '    <div class="listing-modal-facts">',
      '      <div><span>Tipo</span><strong data-modal-type></strong></div>',
      '      <div><span>Capacidade</span><strong data-modal-capacity></strong></div>',
      '      <div><span>Fotografias</span><strong data-modal-count></strong></div>',
      '      <div><span>Reserva</span><strong>Sob consulta</strong></div>',
      '    </div>',
      '    <div class="listing-modal-address">',
      '      <span>' + icons.pin + 'Localização</span>',
      '      <p data-modal-address></p>',
      '      <a href="#" target="_blank" rel="noopener noreferrer" class="btn-map-listing">' + icons.pin + 'Abrir no Google Maps</a>',
      '    </div>',
      '    <section class="listing-modal-units-wrap">',
      '      <h3>Tipologias</h3>',
      '      <ul class="listing-modal-units"></ul>',
      '    </section>',
      '    <p class="listing-modal-copy"></p>',
      '    <a href="#" target="_blank" rel="noopener noreferrer" class="btn-wa-listing listing-modal-whatsapp">' + icons.chat + 'Reservar no WhatsApp</a>',
      '  </aside>',
      '</section>'
    ].join('');

    document.body.appendChild(modal);

    modal.querySelectorAll('[data-modal-close]').forEach(function (button) {
      button.addEventListener('click', closeModal);
    });
    modal.querySelector('.listing-gallery-prev').addEventListener('click', function () { showPhoto(activePhotoIndex - 1); });
    modal.querySelector('.listing-gallery-next').addEventListener('click', function () { showPhoto(activePhotoIndex + 1); });

    return modal;
  }

  function showPhoto(index) {
    if (!activePhotos.length) return;
    activePhotoIndex = (index + activePhotos.length) % activePhotos.length;

    var image = modal.querySelector('.listing-modal-image');
    image.src = activePhotos[activePhotoIndex];
    image.alt = activeListing.title + ' - fotografia ' + (activePhotoIndex + 1);
    modal.querySelector('.listing-modal-counter').textContent = (activePhotoIndex + 1) + ' / ' + activePhotos.length;
  }

  function openListing(index, requestedPhoto) {
    var listing = listings[index];
    if (!listing) return;

    activeListing = listing;
    activePhotos = galleryPhotos(listing);
    activePhotoIndex = Math.max(0, activePhotos.indexOf(requestedPhoto));

    ensureModal();
    modal.querySelector('#listing-modal-title').textContent = listing.title;
    modal.querySelector('.listing-modal-meta').textContent = listing.meta + ' · ' + listing.feature + ' · ' + (listing.capacity || 'Sob consulta');
    modal.querySelector('[data-modal-type]').textContent = listing.badge;
    modal.querySelector('[data-modal-capacity]').textContent = listing.capacity || 'Sob consulta';
    modal.querySelector('[data-modal-count]').textContent = photoLabel(activePhotos.length);
    modal.querySelector('.listing-modal-whatsapp').href = whatsappUrl(listing.title);
    modal.querySelector('[data-modal-address]').textContent = listing.address || 'Ponte de Lima';
    modal.querySelector('.btn-map-listing').href = mapsUrl(listing.address || listing.title);
    modal.querySelector('.listing-modal-units').innerHTML = unitMarkup(listing);
    modal.querySelector('.listing-modal-copy').textContent = listing.description || 'Veja a galeria completa deste alojamento e fale connosco para confirmar disponibilidade, preço e condições de reserva.';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    showPhoto(activePhotoIndex);
    modal.querySelector('.listing-modal-close').focus();
  }

  function closeModal() {
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function onDocumentKeydown(event) {
    if (!modal || !modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') showPhoto(activePhotoIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(activePhotoIndex + 1);
  }

  var grid = document.querySelector('.listings-grid');
  if (grid) {
    grid.innerHTML = listings.map(listingCard).join('');
    grid.classList.add('is-rendered');

    grid.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      var card = event.target.closest('.listing-card');
      if (!card) return;
      var image = event.target.closest('img');
      openListing(Number(card.dataset.listingIndex), image ? image.getAttribute('src') : undefined);
    });

    grid.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      var card = event.target.closest('.listing-card');
      if (!card) return;
      event.preventDefault();
      openListing(Number(card.dataset.listingIndex));
    });
  }

  document.addEventListener('keydown', onDocumentKeydown);
})();
