With [ReactIcons](https://www.npmjs.com/package/react-icons) the icons are converted into SVG, so there is no need to add external .css or .js libraries.

Check available icons from [the list](https://gorangajic.github.io/react-icons/index.html)

On add your own icons, consider to use [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize the code

[Optimizing SVGs in data URIs](https://codepen.io/davatron5000/pen/owyKJM)
[reference](https://codepen.io/davatron5000/pen/owyKJM)
[icomoon.io](https://icomoon.io)

#### Basic
```
<Icon />
```

#### List of Icons
```
<div>
	<Icon name='twitter' />
	<Icon name='facebook' />
	<Icon name='google' />
	<Icon name='instagram' />
	<Icon name='youtube' />
	<Icon name='linkedin' />
	<Icon name='calendar' />
	<Icon name='chat' />
	<Icon name='check' />
	<Icon name='chevron' />
	<Icon name='close' />
	<Icon name='cog' />
	<Icon name='dollar' />
	<Icon name='heart' />
	<Icon name='home' />
	<Icon name='mail' />
	<Icon name='menu' />
	<Icon name='minus' />
	<Icon name='pin' />
	<Icon name='plus' />
	<Icon name='search' />
	<Icon name='star' />
	<Icon name='warning' />
	<Icon name='quote' />
</div>
```

#### Set width
```
<div>
	<Icon width={.5} />
	<Icon width={1} />
	<Icon width={2} />
	<Icon width={5} />
	<Icon width={10} />
</div>
```

#### Set color
```
<div>
	<Icon color='red' />
	<Icon color='green' />
	<Icon color='#2b9c7d' />
</div>
```

#### Rotation
```
initialState = {val: 180};

<div>
	<Range 
		value    = {state.val}
		max      = {360}
		onChange = {(e) => setState({val: e})}
		texted
	/>

	<Icon rotate={state.val} />
</div>
```