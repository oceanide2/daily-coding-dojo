### 문제
[소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/12921)

### 이해
  - 숫자 n을 입력받아서 1부터 숫자 n사이에 존재하는 소수를 찾는다.

  - 숫자 n은 2부터 1000000이하의 숫자이다.

### 계획
  - 일단 숫자 n을 기준으로 for를 사용하여 순회한다.

  - 매번 순회할 때마다 숫자를 가지고 1부터 해당 값까지의 배열을 만든다.

  - 만들어진 배열을 가지고 약수를 찾는다.

  - 찾은 약수가 1과 자기자신만 있는지 확인하고 그렇다면 소수로 포함시킨다.

### 실행

### 반성
  - 정확성과 효율성에서 통과하지 못했다.

  - 단순 순회 방법 이외의 다른 방법을 생각해보아야 할 것 같고, Edge case가
    있는지도 확인해보아야 할 것 같다.

