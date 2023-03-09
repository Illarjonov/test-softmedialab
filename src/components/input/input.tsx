/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react'
import './input.modules.scss'

interface InputProps {
  input?: { [key: string]: any }
  placeholder?: string
  type?: 'number' | 'text' | 'password'
}

const Input: FunctionComponent<InputProps> = ({
  input,
  placeholder,
  type,
}: InputProps) => {
  return (
    <div className="input">
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className="input__item"
      />
    </div>
  )
}

export default Input
