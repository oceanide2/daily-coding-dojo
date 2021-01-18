## 문제

[K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748)

1. 이해
  - array는 요소가 숫자인 1차원 배열이다

  - commands 배열은 [i, j, k]를 나타내는 1차원 배열이 여러 개가 포함된 2차원 배열이다

2. 계획
  - commands 배열을 순회하면서 [i, j, k]로 구성된 1차원 배열을 뽑아낸다.

  - 뽑아낸 배열의 인덱스를 사용하여 slice()메서드를 사용하여 array배열의 요소를 잘라낸다.

  - 잘라낸 array 배열 요소를 sort하여 k 번째의 숫자를 구한다.

  - commands배열을 기준으로 reduce() 메서드를 사용하자

3. 실행

4. 반성
  - sort()는 숫자가 그냥 오름차순으로 정렬되는 것이 아니니 주의하자. sort메서드에
    비교함수를 넣어주어야 한다.

  ```
  const array1 = [1, 30, 4, 21, 10000];
  array1.sort();
  console.log(array1); // [1, 10000, 21, 30, 4]
  ```
