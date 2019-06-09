### Size

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/users.js
 */

const styles = { width: 224, display: 'block', marginBottom: 10 };
const instance = (
  <div>
    <CheckPicker size="lg" placeholder="Large" data={data} style={styles} />
    <CheckPicker size="md" placeholder="Medium" data={data} style={styles} />
    <CheckPicker size="sm" placeholder="Small" data={data} style={styles} />
    <CheckPicker size="xs" placeholder="Xsmall" data={data} style={styles} />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
