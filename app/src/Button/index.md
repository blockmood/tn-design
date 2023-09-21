# Button

### 基本用法
```jsx
import { Button } from '@tn-design';

export default () => <div style={{display:'flex'}}>
  <Button>button</Button>
  <Button type="primary">button</Button>
  <Button type="outline">button</Button>
</div>
```

### 图标按钮
```jsx
import { Button } from '@tn-design';
import { AiFillDelete } from 'react-icons/ai'

export default () => <div style={{display:'flex'}}>
  <Button icon={<AiFillDelete />} type="primary"></Button>
  <Button icon={<AiFillDelete />} type="outline"></Button>
  <Button icon={<AiFillDelete />}>button</Button>
  <Button type="primary" icon={<AiFillDelete />}>button</Button>
  <Button type="outline" icon={<AiFillDelete />}>button</Button>
</div>
```

### 禁用的按钮
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

### 加载中的按钮
```jsx
import { Button } from '@tn-design';

export default () => <>
  <div>
    <Button disabled loading>button</Button>
    <Button type="primary" loading>button</Button>
    <Button type="outline" loading>button</Button>
  </div>
</>
```
