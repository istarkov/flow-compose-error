# Flow Issue

[link](https://github.com/facebook/flow/issues/4342)

[goodCompose](./src/goodCompose.js) uses internally defined compose

[badCompose](./src/badCompose.js) uses [libdef](./flow-typed/recompose) for compose

Except `compose` definition both files share the same code.

After run `yarn flow` we see good error for internally defined Compose, and something strange for libdef compose

## src/goodCompose.js

![image](https://user-images.githubusercontent.com/5077042/28540848-6de8f504-70bf-11e7-977f-4db33c060bc0.png)

## src/badCompose.js

![image](https://user-images.githubusercontent.com/5077042/28540821-590509ac-70bf-11e7-8983-bdd298400627.png)
