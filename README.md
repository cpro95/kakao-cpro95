# 카카오톡 웹 서비스

카카오 디벨로퍼 API를 이용해 웹에서 카카오톡을 사용할 있습니다.

이미지 업로드도 할 수 있습니다.
(아직까지 이미지 업로드는 카카오 API가 한 장만 허락합니다. 참고바랍니다.)

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

netlify를 이용해서 웹호스팅하기 위해서는
자신의 github 리포지터리만 추가 하면 자동 빌드 되는데
최신 버전의 Create-React-App을 쓸 경우
Node 버전과 Yarn 버전이 맞지 않는다.
그래서 netlify 세팅에서
Variables 세팅에서
NODE_VERSION, YARN_VERSION을 현재 호환되는 버전으로
맞게 세팅해야 된다.

NODE_VERSION = 15.3.0
YARN_VERSION = 1.22.10



