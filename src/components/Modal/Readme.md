#### Basic
```
<div>
  <Button onClick={() => setState({isOpen: true})}>Show the modal</Button>
  <Modal isOpen={state.isOpen}>
    <h1>Hallo!</h1>
    <Button onClick={() => setState({isOpen: false})}>Close</Button>
  </Modal>
</div>
```