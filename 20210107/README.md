## 문제

[완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)


1. 이해
    - 마라톤 출전선수 이름이 담긴 배열과 완주 선수 이름이 담긴 배열이 입력으로 주어진다

      출전선수 이름의 배열: participant, 완주 선수 이름의 배열: completion

    - 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였다

      completion의 길이는 participant의 길이보다 1 작다

    - 선수 이름은 문자열이고 전체 리스트는 배열에 저장되어 있다

    - 선수 이름은 중복이 될 수 있다


2. 계획
    - 객체를 1개만 사용한다
    - 완주하지 못한 선수를 구할 때 Object.keys(), Object.values(), findIndex등의 함수를

      사용하지 않고 단순하게 for...in문을 사용한다

    - for...in문을 사용하여 객체를 순회하면 객체의 key값을 얻을 수 있고 이를 이용해서

      완주하지 못한 선수의 이름을 구할 수 있다

3. 실행

4. 반성
    - 단순 순회 방법 이외에 다른 방법을 생각해보자


