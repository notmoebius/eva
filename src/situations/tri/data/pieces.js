const scene = {
  largeur: 1008,
  hauteur: 566
};

const pieces = [
  { image: require('tri/assets/bonbon3.png'), y: 430 / scene.hauteur * 100, x: 855 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon6.png'), y: 430 / scene.hauteur * 100, x: 301 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon2.png'), y: 433 / scene.hauteur * 100, x: 723 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon6.png'), y: 433 / scene.hauteur * 100, x: 335 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon1.png'), y: 433 / scene.hauteur * 100, x: 196 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon8.png'), y: 434 / scene.hauteur * 100, x: 688 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon7.png'), y: 435 / scene.hauteur * 100, x: 450 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon7.png'), y: 437 / scene.hauteur * 100, x: 474 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon2.png'), y: 439 / scene.hauteur * 100, x: 289 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon2.png'), y: 443 / scene.hauteur * 100, x: 706 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon8.png'), y: 443 / scene.hauteur * 100, x: 403 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon11.png'), y: 443 / scene.hauteur * 100, x: 243 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon6.png'), y: 445 / scene.hauteur * 100, x: 387 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon9.png'), y: 445 / scene.hauteur * 100, x: 231 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon3.png'), y: 447 / scene.hauteur * 100, x: 91 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon12.png'), y: 448 / scene.hauteur * 100, x: 501 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon12.png'), y: 448 / scene.hauteur * 100, x: 174 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon10.png'), y: 450 / scene.hauteur * 100, x: 638 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon5.png'), y: 450 / scene.hauteur * 100, x: 281 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon10.png'), y: 450 / scene.hauteur * 100, x: 255 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon12.png'), y: 450 / scene.hauteur * 100, x: 51 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon9.png'), y: 451 / scene.hauteur * 100, x: 832 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon11.png'), y: 451 / scene.hauteur * 100, x: 299 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon5.png'), y: 452 / scene.hauteur * 100, x: 457 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon9.png'), y: 453 / scene.hauteur * 100, x: 619 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon10.png'), y: 455 / scene.hauteur * 100, x: 140 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon12.png'), y: 456 / scene.hauteur * 100, x: 671 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon3.png'), y: 456 / scene.hauteur * 100, x: 346 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon3.png'), y: 458 / scene.hauteur * 100, x: 308 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon10.png'), y: 462 / scene.hauteur * 100, x: 303 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon4.png'), y: 463 / scene.hauteur * 100, x: 230 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon2.png'), y: 464 / scene.hauteur * 100, x: 453 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon11.png'), y: 466 / scene.hauteur * 100, x: 750 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon4.png'), y: 468 / scene.hauteur * 100, x: 404 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon5.png'), y: 469 / scene.hauteur * 100, x: 328 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon7.png'), y: 470 / scene.hauteur * 100, x: 751 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon1.png'), y: 471 / scene.hauteur * 100, x: 632 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon9.png'), y: 471 / scene.hauteur * 100, x: 605 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon7.png'), y: 471 / scene.hauteur * 100, x: 440 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon5.png'), y: 473 / scene.hauteur * 100, x: 654 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon4.png'), y: 474 / scene.hauteur * 100, x: 808 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon11.png'), y: 474 / scene.hauteur * 100, x: 402 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon6.png'), y: 475 / scene.hauteur * 100, x: 374 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon8.png'), y: 476 / scene.hauteur * 100, x: 713 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon8.png'), y: 476 / scene.hauteur * 100, x: 106 / scene.largeur * 100 },

  { image: require('tri/assets/bonbon1.png'), y: 477 / scene.hauteur * 100, x: 795 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon4.png'), y: 477 / scene.hauteur * 100, x: 664 / scene.largeur * 100 },
  { image: require('tri/assets/bonbon1.png'), y: 477 / scene.hauteur * 100, x: 316 / scene.largeur * 100 }
];

export default { pieces };