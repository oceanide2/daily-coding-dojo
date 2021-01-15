## 문제

[두 개 뽑아서 더하기](https://programmers.co.kr/learn/courses/30/lessons/68644)

1. 이해
    - 0 ~ 100까지 값을 갖는 정수 배열이다

    - 배열 요소의 값은 중복될 수 있다

    - 배열 요소 중에서 2개를 뽑아서 만들 수 있는 모든 수를 오름차순으로 정렬하여 리턴한다

    - 배열의 길이는 2이상 100이하이다

2. 계획
    - 두 개를 뽑아서 더한 수를 저장하는 데이터 타입을 배열 대신 Set을 사용할 수 있을 것 같다
      Set을 사용하면 더한 결과값의 중복을 쉽게 제거할 수 있을 것 같다

    - 정수 요소를 갖는 셋 데이터 형의 오름차순 정렬방법을 찾아보자

      셋은 unordered 데이터형이다
      전개 연산자를 사용해 배열로 변경 후, sort()를 사용해보자

    - 정수 배열에서 2개의 숫자를 뽑는 방법이 필요하다

      가장 간단한 방법은 for를 2개 사용해서 모든 숫자에 대해서 순회하는 것이다
      2개를 뽑는 가장 효율적인 방법이 문제의 핵심이다

3. 실행

4. 반성
    - for...of 또는 forEach이외에 2개의 숫자를 뽑는 다른 방법은 없는가?

    - `new Set(iterable)`를 사용하여 Set을 만들때, iterable 객체를 전달 받으면
       그 안의 값을 복사해 Set을 만든다

       `const set = new Set([1, 2, 3])`는 Set 요소가 배열로 저장되는 것이 아니라
       배열 요소가 복사되서 `1, 2, 3`이 Set 요소로 저장된다