import React, { useState, useEffect, FunctionComponent } from 'react'
import './info-box.modules.scss'

interface InfoBoxProps {
  salary: number
  ndfl: boolean
}

const defaultValues = {
  salary: 0,
  salaryNdfl: 0,
  salaryEmployee: 0,
}

const InfoBox: FunctionComponent<InfoBoxProps> = ({
  salary,
  ndfl,
}: InfoBoxProps) => {
  const [value, setValues] = useState(defaultValues)

  useEffect(() => {
    if (salary > 0) {
      //расчет ндфл
      const salaryNdfl = parseFloat(
        Number(ndfl ? salary / 0.87 - salary : salary * 0.13).toFixed(0)
      )
      setValues({
        salary: ndfl ? salary + salaryNdfl : salary,
        salaryNdfl: salaryNdfl,
        salaryEmployee: ndfl ? salary : salary - salaryNdfl,
      })
    } else {
      setValues(defaultValues)
    }
  }, [ndfl, salary])

  return (
    <div className="info-box">
      <div>
        <b className="info-box__amount">{value.salaryEmployee}</b>
        <span className="info-box__text">
          ₽ сотрудник будит получать на руки
        </span>
      </div>
      <div>
        <b className="info-box__amount">{value.salaryNdfl}</b>
        <span className="info-box__text">₽ НДФЛ, 13% от оклада</span>
      </div>
      <div>
        <b className="info-box__amount">{value.salary}</b>
        <span className="info-box__text">₽ за сотрудника в месяц</span>
      </div>
    </div>
  )
}

export default InfoBox
