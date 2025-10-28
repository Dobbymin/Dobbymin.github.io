---
title: 'React Compiler 1.0의 등장!'
category: 'develop'
date: '2025-10-28'
description: '새롭게 등장한 React Compiler란 무엇인지 알아보자!'
thumbnail: '/images/react-compiler-thumbnail.webp'
---

새로운 프로젝트를 시작하게 되면서 Next.js 를 사용해 프로젝트 생성을 시도하다가 신기한것을 발견하게 되었다.

![Next.js 생성 시 옵션으로 나타나는 React Compiler](/images/react-compiler-1.png)

분명 tailwindCSS를 사용할껀지, Turbopack을 사용할껀지, 절대경로 별칭을 사용할껀지 물어보는 옵션이 있어야할 자리에 "React Compiler 1.0을 사용하시겠습니까?" 라는 옵션이 나타난 것이다.

내가 아는 컴파일러는 Vite에서 옵션으로 "typescript + SWC" 를 선택했을때 나타나는 SWC 컴파일러 정도였는데, 처음 보는 옵션이 나타나서 매우 당황해서 당당하게 "사용하지 않음!(false)" 을 선택하고 프로젝트를 생성했다.

그러던 중 우연히 유튜브 숏츠를 보다가 제로초 채널에서 React Compiler 1.0에 대해 소개하는 영상을 만나보게 되었다.

[리액트가 알아서 성능최적화를 해준다...? (React compiler, 리액트 컴파일러 정식 출시)](https://youtube.com/shorts/JVKT7z8w5q0?si=fqdeVTPfRInWCMkY)

대충 React.memo, useMemo, useCallback 등을 사용하지 않아도 React가 알아서 성능 최적화를 해준다는 내용이었다. 조금 더 찾아보니 실제로 코드를 작성해보며 리액트 컴파일러를 사용했을때와 하지 않았을때를 비교하는 영상도 발견할 수 있었다.

[React Compiler 1.0 완벽 정리｜드디어 베타 끝!](https://youtu.be/4WyLSzwRMGg?si=zrW_HlS4vNeAGuHj)

이 영상을 통해 리액트 컴파일러를 사용하게 되면 React 에서 알아서 불필요한 리렌더링을 방지해주고, 메모이제이션 또한 자동으로 처리해준다는 것을 알 수 있었다.

우리는 개발자니까 당연히 새로운 기술을 보면 찾아봐야겠지???????

![우리는 개발자다](/images/react-compiler-2.png)

# React Compiler 란 무엇일까?

React Compiler 1.0 이 2025년 10월 7일에 따끈따끈하게 정식 출시가 되었다고 한다. 무려 10년간 연구와 개발끝에 나온 이 컴파일러는 React 개발자들의 DX를 향상시킬 수 있는 아주 혁신적인 도구라고 한다.

React Compiler는 **빌드 타임에 자동으로 React App을 최적화** 하는 새로운 도구이다. 일반 Javascript와 함꼐 작동하며 React의 규칙을 이해하기 때문에 코드를 다시 작성할 필요가 없다.

## 핵심 기능

React Compiler의 가장 핵심적인 기능은 **'자동 메모이제이션(Automatic Memoization)'** 이다.

이로 인해 개발자는 더 이상 성능 최적화를 위해 `useMemo`, `useCallback`, `React.memo` 등을 수동으로 작성할 필요가 없어진다. 컴파일러가 코드의 의미를 분석하여 어떤 부분을 메모이제이션해야 할지 스스로 판단하고 적용한다.

# 주요 장점 및 특징

## 개발자 경험 (DX) 향상

성능 최적화에 대한 고민과 수동 작업(의존성 배열 관리 등) 에서 해방되어, 개발자가 비즈니스 로직에 더 집중할 수 있게 해준다.

## 광범위한 호환성

React 19뿐만 아니라 17, 18 버전과도 호환되며, Vite, Next.js, Expo 등 대부분의 개발 환경을 지원한다.

### 시각적 확인

최신 React 개발자 도구(DevTools)에서는 컴파일러에 의해 자동으로 최적화된 컴포넌트에 "Memo" 라벨이 붙어, 최적화 여부를 시각적으로 확인할 수 있습니다.

# 적용 방법 (점진적 도입)

Vite, Next.js 등을 사용한 신규 프로젝트에서는 컴파일러가 기본 활성화되도록 옵션이 제공된다.

하지만 기존에 운영중인 프로젝트에 적용할 때는 안정성을 위해 **'점진적 채택(Incremental Adoption)'** 방식이 강력하게 권장된다.

1. **설정 파일 수정**: 컴파일러 설정에서 compilationMode: `annotation` 옵션을 추가한다.

2. **컴포넌트 파일 수정**: 컴파일러를 적용하고 싶은 파일 최상단에 `"use memo"` 라는 지시어를 추가한다.

이렇게 하면 `"use memo"` 지시어가 있는 파일에만 컴파일러가 작동하므로, 컴포넌트 단위로 안정성을 테스트하며 점진적으로 도입할 수 있다.

# 주의사항 및 권장 사항

## '리액트의 규칙(Rules of React)' 준수

리액트 컴파일러는 리액트의 규칙을 철저히 지킨 코드를 기반으로 작동한다. 따라서, ESLint 규칙을 잘 지키는 것이 그 어느 때보다 중요해졌다.

## 기존 useMemo의 활용

컴파일러의 자동 최적화를 기본으로 사용하되, 개발자가 특별히 '정밀한 제어'를 원하는 경우에만 useMemo나 useCallback을 보조적으로 사용할 수 있다.

### 참고 자료

[(번역) 리액트 컴파일러 v1.0](https://ykss.netlify.app/translation/react_compiler/?utm_source=substack&utm_medium=email)

[리액트 컴파일러 공식 문서](https://ko.react.dev/learn/react-compiler)
