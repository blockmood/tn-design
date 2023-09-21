# Button

```jsx
import { Button } from '@tn-design';

export default () => <>
  <Button>button</Button>
  <Button type="primary">button</Button>
  <Button type="brand" onClick={() => { alert() }}>button</Button>
  <Button type="primary" loading onClick={() => { alert() }}>button</Button>
</>
```

## 禁用的按钮
```jsx
import { Button } from '@tn-design';

export default () => <>
  <div>
    <Button disabled>button</Button>
    <Button type="primary" disabled>button</Button>
    <Button type="brand" disabled>button</Button>
  </div>
</>
```
