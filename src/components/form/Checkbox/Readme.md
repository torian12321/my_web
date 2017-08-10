#### Basic
```
<div>
	<Checkbox label='Check-box 1' />
	<Checkbox label='Check-box 2' />
	<Checkbox label='Check-box 3 - Checked' checked/>
	<Checkbox label='Check-box 4' />
	<Checkbox label='Check-box 5 - Disabled' disabled/>
	<Checkbox label='Check-box 6 - Disabled + Checked' disabled checked />
</div>
```

#### On change events
```
<Checkbox label='Show value on alert' onChange={(v) => alert('The checkbox value is: ' + v)} />
```