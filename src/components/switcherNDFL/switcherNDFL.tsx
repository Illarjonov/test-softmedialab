import React from 'react'
import { Field } from 'redux-form'

const SwitcherNDFL = ({ ndfl }: { ndfl: boolean }) => {
  return (
    <div className="form__switch-box">
      <div className={`form__title${ndfl ? '' : ' form__title--active'}`}>
        Указать с НДФЛ
      </div>
      <label className="form__switch">
        <Field name="ndfl" id="employed" component="input" type="checkbox" />
        <span className="form__slider" />
      </label>
      <div className={`form__title${!ndfl ? '' : ' form__title--active'}`}>
        без НДФЛ
      </div>
    </div>
  )
}

export default SwitcherNDFL
