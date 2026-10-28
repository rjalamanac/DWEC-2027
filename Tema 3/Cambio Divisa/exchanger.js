import {
  ARRAY_DIVISAS,
  CAMBIO_DIVISA_EURO_DOLLAR,
  CAMBIO_DIVISA_LIBRA_DOLLAR,
  DOLLARS,
  EUROS,
  LIBRAS,
} from "./constantes.js";

function exchangeDivisa(divisa_origen, divisa_fin, importe) {
  if (divisa_fin === divisa_origen) return importe;
  if (
    !ARRAY_DIVISAS.includes(divisa_fin) ||
    !ARRAY_DIVISAS.includes(divisa_origen)
  ) {
    return NaN;
  }
  if (divisa_origen === EUROS) {
    switch (divisa_fin) {
      case DOLLARS:
        return importe * CAMBIO_DIVISA_EURO_DOLLAR;
      case LIBRAS:
        return (
          importe * (CAMBIO_DIVISA_EURO_DOLLAR / CAMBIO_DIVISA_LIBRA_DOLLAR)
        );
      default:
        return NaN;
    }
  } else if (divisa_origen === DOLLARS) {
    switch (divisa_fin) {
      case EUROS:
        return importe * (1 / CAMBIO_DIVISA_EURO_DOLLAR);
      case LIBRAS:
        return importe * (1 / CAMBIO_DIVISA_LIBRA_DOLLAR);
      default:
        return NaN;
    }
  } else {
    switch (divisa_fin) {
      case DOLLARS:
        return importe * CAMBIO_DIVISA_LIBRA_DOLLAR;
      case EUROS:
        return (
          importe * (CAMBIO_DIVISA_LIBRA_DOLLAR / CAMBIO_DIVISA_EURO_DOLLAR)
        );
      default:
        return NaN;
    }
  }
}

export { exchangeDivisa };
