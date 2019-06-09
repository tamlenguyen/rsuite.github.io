### Size

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const styles = { width: 224, display: 'block', marginBottom: 10 };
const instance = (
  <div>
    <Cascader size="lg" placeholder="Large" data={data} style={styles} />
    <Cascader size="md" placeholder="Medium" data={data} style={styles} />
    <Cascader size="sm" placeholder="Small" data={data} style={styles} />
    <Cascader size="xs" placeholder="Xsmall" data={data} style={styles} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
