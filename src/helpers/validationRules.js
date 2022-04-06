const ValidationErrors = {
  requiredField: "Это обязательное поле",
  email: "E-mail введён некорректно",
  password: "Пароль должен содержать заглавную букву",
  minLength: "Минимальная длина поля",
  maxLength: "Максимальная длина поля",
};

const rulesArray = [
  {
    field: "required",
    rules: {
      required: {
        value: true,
        message: ValidationErrors.requiredField,
      },
    },
  },

  {
    field: "length",
    rules: {
      minLength: {
        value: 2,
        message: ValidationErrors.minLength,
      },
      maxLength: {
        value: 128,
        message: ValidationErrors.maxLength,
      },
    },
  },

  {
    field: "password",
    rules: {
      minLength: {
        value: 4,
        message: ValidationErrors.minLength,
      },
      maxLength: {
        value: 10,
        message: ValidationErrors.maxLength,
      },
      isPassword: {
        value: true,
        message: ValidationErrors.password,
      },
    },
  },

  {
    field: "eMail",
    rules: {
      isEmail: {
        value: true,
        message: ValidationErrors.email,
      },
    },
  },
];

export { rulesArray };
