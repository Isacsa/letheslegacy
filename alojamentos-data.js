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
    "cover": "alojamentos-web/casas/casa-laurinha/img-2051.webp",
    "preview": [
      "alojamentos-web/casas/casa-laurinha/img-2051.webp",
      "alojamentos-web/casas/casa-laurinha/2.webp",
      "alojamentos-web/casas/casa-laurinha/10.webp",
      "alojamentos-web/casas/casa-laurinha/esta.webp"
    ],
    "gallery": [
      "alojamentos-web/casas/casa-laurinha/00b520e7-c314-4473-bf8e-806991541b3a.webp",
      "alojamentos-web/casas/casa-laurinha/2.webp",
      "alojamentos-web/casas/casa-laurinha/3.webp",
      "alojamentos-web/casas/casa-laurinha/4.webp",
      "alojamentos-web/casas/casa-laurinha/4db2a436-cd8f-4616-b0eb-5912ca4f7994.webp",
      "alojamentos-web/casas/casa-laurinha/5.webp",
      "alojamentos-web/casas/casa-laurinha/6.webp",
      "alojamentos-web/casas/casa-laurinha/7.webp",
      "alojamentos-web/casas/casa-laurinha/8.webp",
      "alojamentos-web/casas/casa-laurinha/9.webp",
      "alojamentos-web/casas/casa-laurinha/9a6ebe7e-d392-46ad-a9b2-c2a1027c0cb4.webp",
      "alojamentos-web/casas/casa-laurinha/10.webp",
      "alojamentos-web/casas/casa-laurinha/11.webp",
      "alojamentos-web/casas/casa-laurinha/12.webp",
      "alojamentos-web/casas/casa-laurinha/13.webp",
      "alojamentos-web/casas/casa-laurinha/14.webp",
      "alojamentos-web/casas/casa-laurinha/15.webp",
      "alojamentos-web/casas/casa-laurinha/16.webp",
      "alojamentos-web/casas/casa-laurinha/17.webp",
      "alojamentos-web/casas/casa-laurinha/18.webp",
      "alojamentos-web/casas/casa-laurinha/19.webp",
      "alojamentos-web/casas/casa-laurinha/20.webp",
      "alojamentos-web/casas/casa-laurinha/21.webp",
      "alojamentos-web/casas/casa-laurinha/22.webp",
      "alojamentos-web/casas/casa-laurinha/23.webp",
      "alojamentos-web/casas/casa-laurinha/c8719e82-407f-4978-8db6-5c59d06adc86.webp",
      "alojamentos-web/casas/casa-laurinha/ddbf4cb4-26b2-4464-bae4-7d80a97c6f1c.webp",
      "alojamentos-web/casas/casa-laurinha/esta.webp",
      "alojamentos-web/casas/casa-laurinha/fad0a3aa-59f3-41ee-a0ac-58cfd7129c52.webp",
      "alojamentos-web/casas/casa-laurinha/img-2051.webp",
      "alojamentos-web/casas/casa-laurinha/img-2056.webp",
      "alojamentos-web/casas/casa-laurinha/img-2060.webp"
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
    "cover": "alojamentos-web/casas/casa-das-pereiras/img-4507.webp",
    "preview": [
      "alojamentos-web/casas/casa-das-pereiras/img-4507.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4513.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4491.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4498.webp"
    ],
    "gallery": [
      "alojamentos-web/casas/casa-das-pereiras/75c76ea8-a2bb-4c2e-9345-c115f6bfada1.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4491-2.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4491.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4492-2.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4493-2.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4495.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4498.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4499-2.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4501.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4503.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4506.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4507.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4513.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4515.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4519.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4520.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4524.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4525.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4531.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4532.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4536.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4538.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4539.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4540.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4541.webp",
      "alojamentos-web/casas/casa-das-pereiras/img-4546.webp"
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
    "cover": "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6610.webp",
    "preview": [
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6610.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6603.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6617.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9747.webp"
    ],
    "gallery": [
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6583.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6588.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6591.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6595.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6596.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6597.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6601.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6603.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6606.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6609.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6610.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6612.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6615.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6616.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6617.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6619.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6620.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6622.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6623.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6626.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6629.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6630.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6635.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a6637.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9747.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9750.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9782.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9814.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9817.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9825.webp",
      "alojamentos-web/apartamentos/fotos-anuncio-2/qa2a9826.webp"
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
    "cover": "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3429.webp",
    "preview": [
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3429.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3408.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3416.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3445.webp"
    ],
    "gallery": [
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3431-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3432-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3434-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3435-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3435.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3436.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3437.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3438-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3438.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3439.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3440.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3441-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3441.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3442-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3442.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3445.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/a/img-3446.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3398.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3399-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3399.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3400-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3400.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3401-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3401.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3402-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3402.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3429.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3430.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3431.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/b/img-3436-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3408.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3409.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3410.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3412-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3412.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3413-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3414.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3416-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3416.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3417.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3418.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3419.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3421-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3421.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3422-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3422.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3423-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3423.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3424.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3428-2.webp",
      "alojamentos-web/apartamentos/platanos-river-apartments/c/img-3429-2.webp"
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
    "cover": "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9860.webp",
    "preview": [
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9860.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8312.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8320.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9853.webp"
    ],
    "gallery": [
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8301.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8302.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8303.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8305.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8309.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8310.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8311.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8312.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8314.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8315.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8317.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8318.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8319.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8320.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8322.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8325.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8327.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8329.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8330.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8332.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8334.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8337.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8338.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8339.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8341.webp",
      "alojamentos-web/apartamentos/casa-do-foral/apartamento-rio-lima/fotos-anuncio/qa2a8345.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9853.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9855.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9859.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9860.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9862.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9864.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9872.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9877.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9880.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9881.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9891.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9893.webp",
      "alojamentos-web/apartamentos/casa-do-foral/suite-brutus-fotos-anuncio/qa2a9895.webp"
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
    "cover": "alojamentos-web/apartamentos/encanto-do-lima/qa2a7387.webp",
    "preview": [
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7387.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7400.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7411.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7462.webp"
    ],
    "gallery": [
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7351.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7358.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7363.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7364.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7365.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7370.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7377.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7387.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7396.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7400.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7403.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7404.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7409.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7411.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7413.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7417.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7419.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7422.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7424.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7425.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7428.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7432.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7446.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7448.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7451.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7462.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7464.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7467.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7471.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7474.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7482.webp",
      "alojamentos-web/apartamentos/encanto-do-lima/qa2a7487.webp"
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
    "cover": "alojamentos-web/apartamentos/fotos-anuncio/qa2a1740.webp",
    "preview": [
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1740.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1700.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1717.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1759.webp"
    ],
    "gallery": [
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1679.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1698.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1700.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1702.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1709.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1712.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1713.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1717.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1720.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1721.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1723.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1724.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1725.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1728.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1730.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1732.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1734.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1738.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1740.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1742.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1745.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1759.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1764.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1765.webp",
      "alojamentos-web/apartamentos/fotos-anuncio/qa2a1768.webp"
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
    "cover": "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3081.webp",
    "preview": [
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3081.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3049.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3059.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3018-2.webp"
    ],
    "gallery": [
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3018-2.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3019.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3020.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3022.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3023.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3024.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3026.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3030.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3032.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3033.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3034.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3041.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3044.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/entrada/qa2a3045.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3130.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3131.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3132.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3134.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3136.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3138.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-com-2-camas-de-solteiro/23-3-andar-com-varanda/qa2a3140.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3047.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3048.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3049.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3051.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3052.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3053.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3054.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/3-1-andar/qa2a3057.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3059.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3060.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3061.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3062.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3063.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3070.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/8-2-andar-com-varanda/qa2a3072.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3075.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3076.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3077.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3079.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3080.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3081.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3084.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3085.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3086.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3088.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3089.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/9-2-andar/qa2a3093.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3097.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3098.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3099.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3100.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3103.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3104.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3105.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/11-2-andar/qa2a3106.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3142.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3143.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3144.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3145.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3149.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3151.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3156.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/24-3-andar-com-banheira/qa2a3158.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3159.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3161.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3162.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3166.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3167.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-de-casal/26-3-andar-com-banheira/qa2a3168.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3117.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3119.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3120.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3122.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3123.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-familiar/30-3-andar/qa2a3128.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-individual/22-3-andar/qa2a3110.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-individual/22-3-andar/qa2a3112.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-individual/22-3-andar/qa2a3113.webp",
      "alojamentos-web/quartos/anoitecer-itinerante/quarto-individual/22-3-andar/qa2a3114.webp"
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
    "cover": "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6606.webp",
    "preview": [
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6606.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6617.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal/qa2a6626.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/twin/qa2a6615.webp"
    ],
    "gallery": [
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal/qa2a6626.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal/qa2a6630.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6617.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6619.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6620.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6622.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-com-varanda/qa2a6623.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6606.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6609.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6610.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/casal-superior-com-varanda/qa2a6612.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/twin/qa2a6615.webp",
      "alojamentos-web/quartos/aurega-vintage-bedrooms/twin/qa2a6616.webp"
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

  // URL base dos ficheiros media (Cloudflare R2).
  // Para passar ao domínio próprio, mudar SÓ esta linha (ex: 'https://media.letheslegacy.pt/').
  var mediaBase = 'https://pub-aa72ada04c444be4ba353768bbc5513b.r2.dev/';

  function withBase(path) {
    if (!path) return path;
    if (/^https?:\/\//.test(path)) return path;
    return mediaBase + path.replace(/^\/+/, '');
  }

  listings.forEach(function (listing) {
    if (listing.cover) listing.cover = withBase(listing.cover);
    if (listing.preview) listing.preview = listing.preview.map(withBase);
    if (listing.gallery) listing.gallery = listing.gallery.map(withBase);
  });

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
