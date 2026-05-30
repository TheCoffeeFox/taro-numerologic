import { Temporal } from "@js-temporal/polyfill";

function sumDigits(num: number): number {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + sumDigits(Math.floor(num / 10));
}

function sub(num1: number, num2: number = 0) {
  const sum = num1 + num2;

  const X = sum > 21 ? sum % 21 : sum;
  const Y = sum > 22 ? sum % 22 : sum;
  const Z1 = sumDigits(num1) + sumDigits(num2);
  const Z2 = sumDigits(Z1);
  const Zx1 = sumDigits(X);
  const Zy1 = sumDigits(Y);
  const Zx2 = sumDigits(Zx1);
  const Zy2 = sumDigits(Zy1);

  return {
    X,
    Y,
    Z1,
    Z2,
    Zx1,
    Zy1,
    Zx2,
    Zy2,
  };
}
export function calculate(date: string) {
  const tDate = Temporal.PlainDate.from(date);
  const M = tDate.day;
  const I = tDate.add({ days: 13 }).day;

  return {
    M: sub(M),
    I: sub(I),
    O: sub(M, I),
  };
}

// TODO: логику для Плутона нужно вынести сюда
