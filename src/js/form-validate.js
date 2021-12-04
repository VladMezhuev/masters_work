/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

import { Validator } from '../../node_modules/pure-js-validator/src/validator';

document.addEventListener('DOMContentLoaded', () => {
  const forms = Array.from(document.getElementsByClassName('js-form'))
  forms.forEach(form => {
    const validator = new Validator(form, async (err, is_valid) => {
      console.log(err, is_valid)
      if (is_valid) {
        const { method } = form.dataset
        const { action } = form.dataset
        const body = new FormData(form)
        const value = Object.fromEntries(body.entries());
        const response = await fetch(action, {
          method,
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(value),
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result)
          form.reset()
        }
      }
    })
  })
})
