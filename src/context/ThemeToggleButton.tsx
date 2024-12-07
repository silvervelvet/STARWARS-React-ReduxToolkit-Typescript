import { useTheme } from './ThemeContext'

const ThemeToggleButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme()!

	return (
		<>
			<h3>Select application theme</h3>
			<button onClick={toggleTheme}>
				{theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
			</button>
		</>
	)
}

export default ThemeToggleButton