# Button

```jsx
import { Button } from '@tn-design';

export default () => <div style={{display:'flex'}}>
  <Button>button</Button>
  <Button type="primary">button</Button>
  <Button type="outline">button</Button>
  <Button type="primary" loading>button</Button>
</div>
```

## 禁用的按钮
```jsx
import { Button } from '@tn-design';

export default () => <>
  <div>
    <Button disabled>button</Button>
    <Button type="primary" disabled>button</Button>
    <Button type="outline" disabled>button</Button>
  </div>
</>
```
