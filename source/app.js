import React from 'react';
import {Text} from 'ink';

export default function App({name = 'Stranger'}) {
	return (
		<Text>
			Hello, <Text color="yellow">{name}</Text>
		</Text>
	);
}
