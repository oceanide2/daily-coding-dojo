### 문제

[나누어 떨어지는 숫자배열](https://programmers.co.kr/learn/courses/30/lessons/12910)

### 이해
  - arr 입력배열 요소가 divisor로 나누어 떨어지는 숫자만 구하고 오름차순으로
    정렬한 배열을 리턴한다

### 계획
  - reduce를 사용해서 divisor값으로 나누어지는 배열 요소만 뽑은 후,
    sort()를 사용하여 정렬한다

### 실행

### 반성
  - 함수를 호출할 때 divisor 인자를 넘기지 않아서 나눗셈을 할 때 헤맸다.
    `number % undefined`결과는 `NaN`라는 것을 알았다

  - 나누어지는 배열 요소가 없어서 [-1] 배열을 리턴하는 경우에는 reduce를
    사용하는 것보다 filter를 사용하는 것이 코드가 깔끔해보인다
