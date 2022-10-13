/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from "./convertBytesToHuman";

test("Возвращает false для неправильного типа данных", () => {
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman("string")).toBe(false);
  expect(convertBytesToHuman(function () {})).toBe(false);
});

test("Возвращает корректное значение c дробной частью", () => {
  expect(convertBytesToHuman(10000)).toBe("9.77 KB");
  expect(convertBytesToHuman(10000000000000000)).toBe("8.88 PB");
});

test("Возвращает корректное значение", () => {
  expect(convertBytesToHuman(5)).toBe("5 Bytes");
});

test("Возвращает false для дробного числа", () => {
  expect(convertBytesToHuman(0.5)).toBe(false);
});

test("Возвращает false для отрицательного числа", () => {
  expect(convertBytesToHuman(-1)).toBe(false);
});

test("Возвращает '0 Bytes' для 0", () => {
  expect(convertBytesToHuman(0)).toBe("0 Bytes");
});
