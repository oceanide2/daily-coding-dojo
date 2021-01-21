## 문제

[가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903)

1. 이해
  - 입력은 1 이상 100이하의 String 타입이다

  - String 길이가 홀수이면 가운데 글자를 반환하고 짝수이면 가운데 두 글자를
    반환한다

2. 계획
  - 입력 string 길이는 length()를 사용해서 구한다

  - 홀수이면 floor(length/2)가 가운데 글자의 인덱스이다
    짝수이면 length/2 - 1 ~ length/2 + 1까지 글자를 뽑으면 된다.

3. 실행

4. 반성
  - `slice(start, end)`에서 end 위치값은 포함되지 않는다
