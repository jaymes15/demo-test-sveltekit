import { render } from '@testing-library/svelte';
import About from './About.svelte';

test('should render', () => {
	const screen = render(About, { props: { label: 'a button' } });
    screen.getByRole("heading", {name: "Sign Up"});
        
    expect(header).toBeInTheDocument();
});