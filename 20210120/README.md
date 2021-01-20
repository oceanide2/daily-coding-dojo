## 문제

[3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935)

1. 이해
  - 자연수 n > 3진수 변경 > 앞뒤 반전(3진법) > 10진법으로 변환한다

2. 계획
  - 숫자를 문자열로 변환할 때, toString()함수를 사용한다

  - 문자열을 숫자로 변환할 때, parseInt()함수를 사용한다

3. 실행

4. 반성
  - 다른 풀이를 보니 `숫자와 문자열간의 변환`을 `toString()`와 `parseInt()`
    를 사용했다. 숫자와 문자열간의 변환은 자주 사용하는 것이니 두 함수에 대한
    사용법을 익혀두자.

  - toString()은 radix를 파라미터로 받을 수 있고 해당 숫자를 2진수값으로
    변환할 수 있다.
    ```
    const a = 10;
    a.toString(2); // 1010
    ```
  - parseInt()는 문자열과 그 문자열이 표현하는 radix를 받을 수 있고,
    해당 문자열을 radix가 표시한 숫자로 변환할 수 있다.
    ```
    const str = "1111";
    parseInt(str, 2); // 15
    ```
