import { useState } from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [total, setTotal] = useState('0');
  const [number, setNumber] = useState('');

  const clean = () => {
    setNumber('');
  }

  const deleteLastEntry = () => {
    console.log('number', number.length)
    if (number.length) {
        setNumber(number.slice(0, -1));
    }
  }

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;

    // No aceptar doble 0 al inicio
    if (number.startsWith('0') || textNumber === '-0') {

      // Punto decimal
        if (textNumber === '.') {
            setNumber(number + textNumber);
            return;
        }

        // Evaluar si es otro 0 y hay un punto
        if (textNumber === '0' && number.includes('.')) {
            setNumber(number + textNumber);
        }

        if (textNumber !== '0' && !number.includes('.')) {
            return setNumber(textNumber);
            ;
        }

        // Evaluar si es diferente de 0 y no hay un punto
        if(textNumber === '0' && !number.includes('.')) {
            return;
        }

        return setNumber(number + textNumber);
    }

    setNumber(number + textNumber);
  };

  const toggleSign = () => {
    if (number.includes('-')) {
        return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  }

  const operation = (typeOperation: string) => {
    setNumber(number + typeOperation);
  }

  const calculate = () => {
    const result = number.split("+").map(Number).reduce((a, b) => a + b, 0)
    console.log('result', result)
    setNumber(result.toString());

  }

  return {
    total,
    number,
    buildNumber,
    toggleSign,
    clean,
    deleteLastEntry,
    operation,
    calculate
  };
};
