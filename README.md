# Number-Methods


## 1. Math.floor(x)
- Округляет число вниз до ближайшего целого.
- Пример:
```javascript
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5
```

## 2. Math.ceil(x)
- Округляет число вверх до ближайшего целого.
- Пример:
```javascript
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.1)); // -4
```


## 3. Math.round(x)
- Округляет число до ближайшего целого (по математическим правилам).
- Если дробная часть < 0.5, округляет вниз, если ≥ 0.5, округляет вверх.
- Пример:
```javascript
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
```
## 4. Math.abs(x)
- Возвращает абсолютное значение (модуль числа).
- Пример:
```js
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10
```
## 5. Math.max(a, b, ...)
- Возвращает наибольшее из переданных чисел.
- Пример:

```js
console.log(Math.max(3, 7, 2, 9)); // 9
```

## 6. Math.min(a, b, ...)
- Возвращает наименьшее из переданных чисел.
- Пример:
```js
console.log(Math.min(3, 7, 2, 9)); // 2
```
## 7. Math.pow(base, exponent)
- Возводит число в степень (base^exponent).
- Пример:

```js
console.log(Math.pow(2, 3)); // 8 (2^3 = 8)
```

## 8. Math.sqrt(x)
- Возвращает квадратный корень числа.
- Пример:
```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(16)); // 4
```
## 9. Math.random()
- Возвращает случайное число в диапазоне [0, 1) (от 0 до 1, но 1 не включается).
- Пример:

```js
console.log(Math.random()); // 0.4321123 (случайное)
```

## 10. isNaN(x)
- Проверяет, является ли значение NaN (Not-a-Number).
- Пример:

```js
console.log(isNaN(123)); // false
console.log(isNaN("Hello")); // true
console.log(isNaN(NaN)); // true
```

Ин ҷо ҷадвали мухтасар барои методҳои Math дар JavaScript оварда шудааст:

Метод |	Тавсиф | Мисол | Натича
------|--------|-------|--------
Math.floor(x) |	Округление вниз (в сторону меньшего целого) |	Math.floor(4.9) |	4
Math.ceil(x) |	Округление вверх (в сторону большего целого) |	Math.ceil(4.1) |	5
Math.round(x) |	Округление по математическим правилам |	Math.round(4.5) |	5
Math.abs(x) |	Абсолютное значение (модуль числа) |	Math.abs(-10) |	10
Math.max(a, b, ...) |	Наибольшее из переданных чисел |	Math.max(3, 7, 2, 9) |	9
Math.min(a, b, ...) |	Наименьшее из переданных чисел |	Math.min(3, 7, 2, 9) |	2
Math.pow(base, exponent) |	Возведение в степень |	Math.pow(2, 3) |	8
Math.sqrt(x) |	Квадратный корень числа |	Math.sqrt(9) |	3
Math.random() |	Случайное число от 0 до 1 (не включая 1) |	Math.random() |	0.4321 (пример)
isNaN(x) |	Проверяет, является ли значение NaN |	isNaN("Hello") |	true