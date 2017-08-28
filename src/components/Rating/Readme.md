#### Basic
```
<Rating />
```

#### Custom values
```
<div>
	<Rating val={3} of={10} />
	<Rating val={7} of={15} />
</div>
```

#### Custom color
```
<div>
	<Rating val={3} color='#fb6400' />
	<Rating val={5} color='red' />
</div>
```

#### Icons
```
initialState = {
	val: 3,
	max: 20
};
<div>
	<Range 
		value    = {state.val}
		max      = {state.max}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Rating val={state.val} of={state.max} icon='star' />
	<Rating val={state.val} of={state.max} icon='chat' />
	<Rating val={state.val} of={state.max} icon='cog' />
	<Rating val={state.val} of={state.max} icon='heart' />
	<Rating val={state.val} of={state.max} icon='dollar' />
</div>
```