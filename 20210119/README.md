## 문제

[3진법 뒤집기](https://programmers.co.kr/learn/courses/30/lessons/68935)

1. 이해
  - 자연수 n > 3진수 변경 > 앞뒤 반전(3진법) > 10진법으로 변환한다

2. 계획
  - 몫과 나머지를 사용해서 자연수를 3진수로 변환하자

  - 십진법으로 다시 변환하는 것은 reduce를 사용하자

3. 실행

4. 반성
  - 3진수로 변경방법으로 while을 사용하는 것 말고 다른 방법이 생각나지 않았다.

  - 배열 구조분해를 사용할 때 타입을 지정하는 것을 까먹지 말자.
    예를 들어서 `const [q, r] = div(n)`이 있다면 `const`를 빼먹어서 해맸다

  - 다른 풀이 방법을 생각해보자
