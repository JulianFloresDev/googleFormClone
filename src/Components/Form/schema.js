import Joi from "joi";

export const Schema = Joi.object({
  full_name: Joi.string()
    .regex(/^(([a-zA-Z])+\s+)+([a-zA-Z])+$/)
    .required()
    .messages({
      "string.empty": "Este campo es obligatorio.",
      "string.base": "Ingrese un nombre válido",
      "string.pattern.base": "Ingrese un nombre válido",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Este campo es obligatorio",
      "string.base": "Ingrese un email válido",
    }),
  birth_date: Joi.date().less("01-01-2005").required().messages({
    "any.empty": "Este campo es obligatorio",
    "date.base": "Ingrese una fecha válida",
    "date.less": "Debes ser mayor de 18 años",
  }),
  country_of_origin: Joi.string()
    .required()
    .valid(
      "argentina",
      "brasil",
      "chile",
      "colombia",
      "mexico",
      "peru",
      "uruguay",
      "venezuela"
    )
    .messages({
      "string.empty": "Este campo es obligatorio",
      "any.only": "Seleccione una opción",
    }),
  terms_and_conditions: Joi.boolean().valid(true).required(),
});
