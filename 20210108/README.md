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
    - reduce를 사용하여 객체를 만들어본다

3. 실행
    - participant와 completion 배열의 hash를 만들때만 reduce를 사용했다

4. 반성
    - reduce의 콜백함수를 화살표 함수로 사용할 때, 괄호에 주의하자

    - 완료하지 못한 선수를 찾을 때 for...in문을 사용했는데 다른 방법은 없을까

