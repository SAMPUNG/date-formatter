# date-formatter

将 Date 转化为指定格式的 string:

- 月(M)、日(d)、小时(h)、分(m)、秒(s) 可以用 1-2 个占位符
- 年(y)可以用 1-4 个占位符
- 毫秒(S)只能用 1 个占位符(是 1-3 位的数字)

例：

- format(new Date(), 'yyyy-MM-dd hh:mm:ss.S')

> 2006-07-02 08:09:04.423

- format(new Date(), 'yyyy-M-d h:m:s.S')

> 2006-7-2 8:9:4.18

# NPM Install

```cmd
npm install @jugar/date-formatter@latest
```

# Usage

```ts
import { formatDate } from '~/utils/format'

formatDate(datetime, 'yyyy-MM-dd hh:mm:ss')
```
