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
    - 출전선수 배열과 완주선수 배열을 각각 객체로 변환하여 비교한다

3. 실행

4. 반성
    - 계획에서는 출전선수 배열과 완주선수 배열을 각각 객체로 만들고 객체를 순회하면 완주하지 못한 선수를 찾으려고 했다

    - 객체를 2개로 따로 만들고 나니 서로 비교할 방법이 생각나지 않았다

      계획 단계에서 어떻게 비교할지 자세히 생각하지 않고 진행해서 더 헤맸던 것 같다

    - participant/completion 배열을 순회하면서 객체를 1개만 생성하는 방법으로 바꾸어 진행했다

    - 단순 순회하는 방법이외에 다른 방법을 고민해보자
